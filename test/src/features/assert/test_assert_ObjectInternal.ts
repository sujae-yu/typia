import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assert_ObjectInternal = (): void =>
  _test_assert(TypeGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )((input) => typia.assert<ObjectInternal>(input));
