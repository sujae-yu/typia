import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_schema_v3_0_TypeTagObjectUnion = _test_json_schema({
  version: "3.0",
  name: "TypeTagObjectUnion",
})(typia.json.schema<TypeTagObjectUnion, "3.0">());
