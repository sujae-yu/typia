import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_isClone_ConstantAtomicSimple = (): void =>
  _test_misc_isClone("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input) => typia.misc.isClone<ConstantAtomicSimple>(input));
