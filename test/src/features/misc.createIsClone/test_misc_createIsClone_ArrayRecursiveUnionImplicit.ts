import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createIsClone_ArrayRecursiveUnionImplicit = (): void =>
  _test_misc_isClone(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.misc.createIsClone<ArrayRecursiveUnionImplicit>(),
  );
