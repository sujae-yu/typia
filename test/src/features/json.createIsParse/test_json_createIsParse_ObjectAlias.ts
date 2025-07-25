import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_createIsParse_ObjectAlias = (): void =>
  _test_json_isParse("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    typia.json.createIsParse<ObjectAlias>(),
  );
