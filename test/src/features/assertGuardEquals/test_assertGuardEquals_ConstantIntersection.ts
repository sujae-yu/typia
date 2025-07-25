import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertGuardEquals_ConstantIntersection = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)((input) =>
    typia.assertGuardEquals<ConstantIntersection>(input),
  );
