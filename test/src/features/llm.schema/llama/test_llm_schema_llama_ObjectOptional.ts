import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_schema_llama_ObjectOptional = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ObjectOptional",
  })(typia.llm.schema<ObjectOptional, "llama">({}));
