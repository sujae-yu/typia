import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_createPrune_ArrayUnion = (): void =>
  _test_misc_prune("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.misc.createPrune<ArrayUnion>(),
  );
