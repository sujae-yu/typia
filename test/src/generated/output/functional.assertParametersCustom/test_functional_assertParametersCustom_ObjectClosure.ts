import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../../internal/_test_functional_assertParameters";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_functional_assertParametersCustom_ObjectClosure =
  _test_functional_assertParameters(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      (input: ObjectClosure): ObjectClosure => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectClosure.IRecord => {
          const __is = (input: any): input is ObjectClosure.IRecord => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id && "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectClosure.IRecord => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.id ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("function" === typeof input.open ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".open",
                      expected: "unknown",
                      value: input.open,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectClosure.IRecord",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectClosure.IRecord",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );