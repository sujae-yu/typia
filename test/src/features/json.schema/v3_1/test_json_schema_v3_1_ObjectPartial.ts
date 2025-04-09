import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_schema_v3_1_ObjectPartial = _test_json_schema({
  version: "3.1",
  name: "ObjectPartial",
})(typia.json.schema<ObjectPartial, "3.1">());
