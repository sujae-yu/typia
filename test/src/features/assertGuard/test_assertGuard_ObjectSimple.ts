import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertGuard_ObjectSimple = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.assertGuard<ObjectSimple>(input),
  );
