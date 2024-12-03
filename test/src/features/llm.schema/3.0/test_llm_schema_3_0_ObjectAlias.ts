import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_schema_3_0_ObjectAlias = _test_llm_schema({
  model: "3.0",
  name: "ObjectAlias",
})(typia.llm.schema<ObjectAlias, "3.0">());