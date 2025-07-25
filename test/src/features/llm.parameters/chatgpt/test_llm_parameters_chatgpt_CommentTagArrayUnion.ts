import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_parameters_chatgpt_CommentTagArrayUnion = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagArrayUnion",
  })(typia.llm.parameters<CommentTagArrayUnionParameters, "chatgpt">());

interface CommentTagArrayUnionParameters {
  regular: CommentTagArrayUnion;
  nullable: CommentTagArrayUnion | null;
  optional: CommentTagArrayUnion | undefined;
  faint: CommentTagArrayUnion | null | undefined;
  array: Array<CommentTagArrayUnion>;
}
