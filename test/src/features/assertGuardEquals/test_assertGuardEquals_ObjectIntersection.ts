import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertGuardEquals_ObjectIntersection = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.assertGuardEquals<ObjectIntersection>(input),
  );
