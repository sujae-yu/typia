import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertGuardEquals_ArraySimple = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.createAssertGuardEquals<ArraySimple>());
