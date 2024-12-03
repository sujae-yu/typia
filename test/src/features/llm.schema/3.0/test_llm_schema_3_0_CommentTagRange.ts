import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_schema_3_0_CommentTagRange = _test_llm_schema({
  model: "3.0",
  name: "CommentTagRange",
})(typia.llm.schema<CommentTagRange, "3.0">());