import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpQueryProgrammer {
  export const INPUT_TYPE = "string | URLSearchParams";

  export interface IProps extends IProgrammerProps {
    allowOptional?: boolean;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
    allowOptional: boolean;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // ANALYZE TYPE
    const collection: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: true,
        validate: (meta, explore) =>
          validate(meta, explore, props.allowOptional),
      },
      collection,
      type: props.type,
    });
    if (result.success === false)
      throw TransformerError.from(`typia.http.${props.importer.method}`)(
        result.errors,
      );

    // DO TRANSFORM
    const object: MetadataObject = result.data.objects[0]!;
    const statements: ts.Statement[] = decode_object({
      importer: props.importer,
      object,
    });
    return {
      functions: {},
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode(INPUT_TYPE),
          ),
        ],
        ts.factory.createImportTypeNode(
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral("typia"),
          ),
          undefined,
          ts.factory.createIdentifier("Resolved"),
          [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
          false,
        ),
        undefined,
        ts.factory.createBlock(statements, true),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
      allowOptional: !!props.allowOptional,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };

  export const validate = (
    meta: Metadata,
    explore: MetadataFactory.IExplore,
    allowOptional: boolean = false,
  ): string[] => {
    const errors: string[] = [];
    const insert = (msg: string) => errors.push(msg);

    if (explore.top === true) {
      // TOP MUST BE ONLY OBJECT
      if (meta.objects.length !== 1 || meta.bucket() !== 1)
        insert("only one object type is allowed.");
      if (meta.nullable === true) insert("query parameters cannot be null.");
      if (meta.isRequired() === false) {
        if (allowOptional === true) {
          const everyPropertiesAreOptional: boolean =
            meta.size() === 1 &&
            meta.objects.length === 1 &&
            meta.objects[0]!.properties.every(
              (p) => p.value.isRequired() === false,
            );
          if (everyPropertiesAreOptional === false)
            insert(
              "query parameters can be optional only when every properties are optional.",
            );
        } else insert("query parameters cannot be undefined.");
      }
    } else if (
      explore.nested !== null &&
      explore.nested instanceof MetadataArrayType
    ) {
      //----
      // ARRAY
      //----
      const atomics = HttpMetadataUtil.atomics(meta);
      const expected: number =
        meta.atomics.length +
        meta.templates.length +
        meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected)
        insert("only atomic or constant types are allowed in array.");
    } else if (explore.object && explore.property !== null) {
      //----
      // COMMON
      //----
      // PROPERTY MUST BE SOLE
      if (typeof explore.property === "object")
        insert("dynamic property is not allowed.");
      // DO NOT ALLOW TUPLE TYPE
      if (meta.tuples.length) insert("tuple type is not allowed.");
      // DO NOT ALLOW UNION TYPE
      if (HttpMetadataUtil.isUnion(meta)) insert("union type is not allowed.");
      // DO NOT ALLOW NESTED OBJECT
      if (
        meta.objects.length ||
        meta.sets.length ||
        meta.maps.length ||
        meta.natives.length
      )
        insert("nested object type is not allowed.");
    }
    return errors;
  };

  const decode_object = (props: {
    importer: FunctionImporter;
    object: MetadataObject;
  }): ts.Statement[] => {
    const input: ts.Identifier = ts.factory.createIdentifier("input");
    const output: ts.Identifier = ts.factory.createIdentifier("output");

    return [
      ts.factory.createExpressionStatement(
        ts.factory.createBinaryExpression(
          input,
          ts.factory.createToken(ts.SyntaxKind.EqualsToken),
          ts.factory.createAsExpression(
            ts.factory.createCallExpression(
              props.importer.use("params"),
              undefined,
              [input],
            ),
            ts.factory.createTypeReferenceNode("URLSearchParams"),
          ),
        ),
      ),
      StatementFactory.constant({
        name: "output",
        value: ts.factory.createObjectLiteralExpression(
          props.object.properties.map((p) =>
            decode_regular_property({
              importer: props.importer,
              property: p,
            }),
          ),
          true,
        ),
      }),
      ts.factory.createReturnStatement(
        ts.factory.createAsExpression(output, TypeFactory.keyword("any")),
      ),
    ];
  };

  const decode_regular_property = (props: {
    importer: FunctionImporter;
    property: MetadataProperty;
  }): ts.PropertyAssignment => {
    const key: string = props.property.key.constants[0]!.values[0]!
      .value as string;
    const value: Metadata = props.property.value;

    const [type, isArray]: [Atomic.Literal, boolean] = value.atomics.length
      ? [value.atomics[0]!.type, false]
      : value.constants.length
        ? [value.constants[0]!.type, false]
        : value.templates.length
          ? ["string", false]
          : (() => {
              const meta =
                value.arrays[0]?.type.value ??
                value.tuples[0]!.type.elements[0]!;
              return meta.atomics.length
                ? [meta.atomics[0]!.type, true]
                : meta.templates.length
                  ? ["string", true]
                  : [meta.constants[0]!.type, true];
            })();
    return ts.factory.createPropertyAssignment(
      Escaper.variable(key) ? key : ts.factory.createStringLiteral(key),
      isArray
        ? decode_array({
            importer: props.importer,
            metadata: value,
            input: ts.factory.createCallExpression(
              IdentifierFactory.access(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("input.getAll"),
                  undefined,
                  [ts.factory.createStringLiteral(key)],
                ),
                "map",
              ),
              undefined,
              [
                ts.factory.createArrowFunction(
                  undefined,
                  undefined,
                  [IdentifierFactory.parameter("elem")],
                  undefined,
                  undefined,
                  decode_value({
                    importer: props.importer,
                    type,
                    coalesce: false,
                    input: ts.factory.createIdentifier("elem"),
                  }),
                ),
              ],
            ),
          })
        : decode_value({
            importer: props.importer,
            type,
            coalesce: value.nullable === false && value.isRequired() === false,
            input: ts.factory.createCallExpression(
              ts.factory.createIdentifier("input.get"),
              undefined,
              [ts.factory.createStringLiteral(key)],
            ),
          }),
    );
  };

  const decode_value = (props: {
    importer: FunctionImporter;
    type: Atomic.Literal;
    coalesce: boolean;
    input: ts.Expression;
  }) => {
    const call = ts.factory.createCallExpression(
      props.importer.use(props.type),
      undefined,
      [props.input],
    );
    return props.coalesce
      ? ts.factory.createBinaryExpression(
          call,
          ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
          ts.factory.createIdentifier("undefined"),
        )
      : call;
  };

  const decode_array = (props: {
    importer: FunctionImporter;
    metadata: Metadata;
    input: ts.Expression;
  }): ts.Expression =>
    props.metadata.nullable || props.metadata.isRequired() === false
      ? ts.factory.createCallExpression(
          props.importer.use("array"),
          undefined,
          [
            props.input,
            props.metadata.nullable
              ? ts.factory.createNull()
              : ts.factory.createIdentifier("undefined"),
          ],
        )
      : props.input;
}
