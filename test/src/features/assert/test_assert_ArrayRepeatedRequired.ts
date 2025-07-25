import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assert_ArrayRepeatedRequired = (): void =>
  _test_assert(TypeGuardError)("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )((input) => typia.assert<ArrayRepeatedRequired>(input));
