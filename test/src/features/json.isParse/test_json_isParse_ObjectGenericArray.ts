import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_isParse_ObjectGenericArray = (): void =>
  _test_json_isParse("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.json.isParse<ObjectGenericArray>(input));
