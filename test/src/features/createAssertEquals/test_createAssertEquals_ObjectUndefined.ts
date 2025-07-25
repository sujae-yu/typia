import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertEquals_ObjectUndefined = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(typia.createAssertEquals<ObjectUndefined>());
