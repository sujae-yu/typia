import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_schemas_v3_0_TupleRestObject = _test_json_schemas({
  version: "3.0",
  name: "TupleRestObject",
})(typia.json.schemas<[TupleRestObject], "3.0">());