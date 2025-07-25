import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertFunctionCustom_FunctionalProperty =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
