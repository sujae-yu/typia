import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_schema_3_1_ObjectGenericArray = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectGenericArray",
  })(typia.llm.schema<ObjectGenericArray, "3.1">({}));
