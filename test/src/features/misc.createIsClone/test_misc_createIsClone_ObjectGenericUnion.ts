import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createIsClone_ObjectGenericUnion = (): void =>
  _test_misc_isClone("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.misc.createIsClone<ObjectGenericUnion>());
