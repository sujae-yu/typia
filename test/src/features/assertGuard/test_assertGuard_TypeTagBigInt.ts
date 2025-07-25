import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertGuard_TypeTagBigInt = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )((input) => typia.assertGuard<TypeTagBigInt>(input));
