import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_assertGuard_ArrayRepeatedUnion = (): void =>
  _test_assertGuard(TypeGuardError)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )((input) => typia.assertGuard<ArrayRepeatedUnion>(input));
