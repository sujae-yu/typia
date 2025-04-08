import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_schema_v3_1_AtomicUnion = _test_json_schema({
  version: "3.1",
  name: "AtomicUnion",
})(typia.json.schema<AtomicUnion, "3.1">());
