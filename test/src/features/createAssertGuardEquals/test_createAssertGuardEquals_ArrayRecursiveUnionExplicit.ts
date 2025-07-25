import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertGuardEquals_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_assertGuardEquals(TypeGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.createAssertGuardEquals<ArrayRecursiveUnionExplicit>(),
    );
