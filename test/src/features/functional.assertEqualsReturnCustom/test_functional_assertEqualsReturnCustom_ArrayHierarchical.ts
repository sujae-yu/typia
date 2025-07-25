import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertEqualsReturnCustom_ArrayHierarchical =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ArrayHierarchical")(
      ArrayHierarchical,
    )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
