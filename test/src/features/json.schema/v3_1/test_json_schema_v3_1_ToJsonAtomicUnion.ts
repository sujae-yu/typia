import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_schema_v3_1_ToJsonAtomicUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ToJsonAtomicUnion",
  })(typia.json.schema<ToJsonAtomicUnion, "3.1">());
