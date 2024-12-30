import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_applicationOfValidate_llama_CommentTagObjectUnion =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "CommentTagObjectUnion",
    factory: CommentTagObjectUnion,
  })(
    typia.llm.applicationOfValidate<
      CommentTagObjectUnionApplication,
      "llama"
    >(),
  );

interface CommentTagObjectUnionApplication {
  insert(p: { first: CommentTagObjectUnion }): Promise<void>;
  reduce(p: {
    first: CommentTagObjectUnion;
    second: CommentTagObjectUnion | null;
  }): Promise<CommentTagObjectUnion>;
  coalesce(p: {
    first: CommentTagObjectUnion | null;
    second: CommentTagObjectUnion | null;
    third?: CommentTagObjectUnion | null;
  }): Promise<CommentTagObjectUnion | null>;
}