import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { ProtobufDecodeProgrammer } from "./ProtobufDecodeProgrammer";

export namespace ProtobufAssertDecodeProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    init?: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
      ...props,
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: false,
        },
      },
      config: {
        equals: false,
        guard: false,
      },
    });
    const decode: FeatureProgrammer.IDecomposed =
      ProtobufDecodeProgrammer.decompose(props);
    return {
      functions: {
        ...assert.functions,
        ...decode.functions,
      },
      statements: [
        ...assert.statements,
        ...decode.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__decode",
          value: decode.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          ...decode.arrow.parameters,
          AssertProgrammer.Guardian.parameter(props.init),
        ],
        decode.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__assert"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
            AssertProgrammer.Guardian.identifier(),
          ],
        ),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}
