import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_schema_v3_1_ObjectUnionNonPredictable =
  _test_json_schema({
    version: "3.1",
    name: "ObjectUnionNonPredictable",
  })(typia.json.schema<ObjectUnionNonPredictable, "3.1">());
