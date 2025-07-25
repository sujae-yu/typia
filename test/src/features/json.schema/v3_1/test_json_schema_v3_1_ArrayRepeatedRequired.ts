import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_schema_v3_1_ArrayRepeatedRequired = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayRepeatedRequired",
  })(typia.json.schema<ArrayRepeatedRequired, "3.1">());
