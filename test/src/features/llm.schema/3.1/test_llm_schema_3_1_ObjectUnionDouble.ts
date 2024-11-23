import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_schema_3_1_ObjectUnionDouble = _test_llm_schema({
  model: "3.1",
  name: "ObjectUnionDouble",
})(typia.llm.schema<ObjectUnionDouble, "3.1">({}));
