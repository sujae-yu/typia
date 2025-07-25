import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_schema_v3_0_TypeTagArrayUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TypeTagArrayUnion",
  })(typia.json.schema<TypeTagArrayUnion, "3.0">());
