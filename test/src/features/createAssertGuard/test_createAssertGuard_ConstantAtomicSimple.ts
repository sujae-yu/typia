import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertGuard_ConstantAtomicSimple = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.createAssertGuard<ConstantAtomicSimple>(),
  );
