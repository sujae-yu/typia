import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_schema_v3_0_TupleRestAtomic = _test_json_schema({
  version: "3.0",
  name: "TupleRestAtomic",
})(typia.json.schema<TupleRestAtomic, "3.0">());
