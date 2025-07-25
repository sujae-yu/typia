import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_isParse_ObjectPrimitive = (): void =>
  _test_json_isParse("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    (input) => typia.json.isParse<ObjectPrimitive>(input),
  );
