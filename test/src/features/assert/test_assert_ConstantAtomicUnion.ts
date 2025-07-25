import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assert_ConstantAtomicUnion = (): void =>
  _test_assert(TypeGuardError)("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )((input) => typia.assert<ConstantAtomicUnion>(input));
