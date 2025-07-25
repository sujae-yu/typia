import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_schemas_v3_0_ArrayRepeatedRequired = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRepeatedRequired",
  })(typia.json.schemas<[ArrayRepeatedRequired], "3.0">());
