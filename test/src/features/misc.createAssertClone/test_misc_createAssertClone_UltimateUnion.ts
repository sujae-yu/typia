import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_createAssertClone_UltimateUnion = (): void =>
  _test_misc_assertClone(TypeGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(typia.misc.createAssertClone<UltimateUnion>());
