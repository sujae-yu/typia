import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_schema_v3_1_TypeTagDefault = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagDefault",
  })(typia.json.schema<TypeTagDefault, "3.1">());
