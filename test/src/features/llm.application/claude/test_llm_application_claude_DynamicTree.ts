import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_application_claude_DynamicTree = _test_llm_application({
  model: "claude",
  name: "DynamicTree",
})(typia.llm.application<DynamicTreeApplication, "claude">());

interface DynamicTreeApplication {
  insert(p: { first: DynamicTree }): Promise<void>;
  reduce(p: {
    first: DynamicTree;
    second: DynamicTree | null;
  }): Promise<DynamicTree>;
  coalesce(p: {
    first: DynamicTree | null;
    second: DynamicTree | null;
    third?: DynamicTree | null;
  }): Promise<DynamicTree | null>;
}
