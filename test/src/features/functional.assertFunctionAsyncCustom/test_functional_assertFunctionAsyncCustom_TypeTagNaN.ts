import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertFunctionAsyncCustom_TypeTagNaN =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagNaN")(
      TypeTagNaN,
    )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
