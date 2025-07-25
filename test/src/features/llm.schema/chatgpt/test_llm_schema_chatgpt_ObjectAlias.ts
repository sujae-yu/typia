import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_schema_chatgpt_ObjectAlias = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectAlias",
  })(typia.llm.schema<ObjectAlias, "chatgpt">({}));
