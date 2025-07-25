import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assert_ArrayAtomicAlias = (): void =>
  _test_assert(TypeGuardError)("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) => typia.assert<ArrayAtomicAlias>(input));
