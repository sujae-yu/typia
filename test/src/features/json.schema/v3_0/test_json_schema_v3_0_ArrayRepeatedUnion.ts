import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_json_schema_v3_0_ArrayRepeatedUnion = _test_json_schema({
  version: "3.0",
  name: "ArrayRepeatedUnion",
})(typia.json.schema<ArrayRepeatedUnion, "3.0">());
