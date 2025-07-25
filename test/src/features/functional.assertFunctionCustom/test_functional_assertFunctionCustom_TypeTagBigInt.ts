import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertFunctionCustom_TypeTagBigInt = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
