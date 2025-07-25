import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_isPrune_ObjectGenericArray = (): void =>
  _test_misc_isPrune("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.misc.isPrune<ObjectGenericArray>(input));
