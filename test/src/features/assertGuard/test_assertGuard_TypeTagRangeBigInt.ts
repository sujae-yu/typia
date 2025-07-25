import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertGuard_TypeTagRangeBigInt = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )((input) => typia.assertGuard<TypeTagRangeBigInt>(input));
