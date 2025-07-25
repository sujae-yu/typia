import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createClone_ObjectGeneric = (): void =>
  _test_misc_clone("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.misc.createClone<ObjectGeneric>(),
  );
