import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_schema_v3_1_ObjectGeneric = _test_json_schema({
  version: "3.1",
  name: "ObjectGeneric",
})(typia.json.schema<ObjectGeneric, "3.1">());
