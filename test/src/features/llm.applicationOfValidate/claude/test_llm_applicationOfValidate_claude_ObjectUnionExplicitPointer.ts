import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_applicationOfValidate_claude_ObjectUnionExplicitPointer =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectUnionExplicitPointer",
    factory: ObjectUnionExplicitPointer,
  })(
    typia.llm.applicationOfValidate<
      ObjectUnionExplicitPointerApplication,
      "claude"
    >(),
  );

interface ObjectUnionExplicitPointerApplication {
  insert(p: { first: ObjectUnionExplicitPointer }): Promise<void>;
  reduce(p: {
    first: ObjectUnionExplicitPointer;
    second: ObjectUnionExplicitPointer | null;
  }): Promise<ObjectUnionExplicitPointer>;
  coalesce(p: {
    first: ObjectUnionExplicitPointer | null;
    second: ObjectUnionExplicitPointer | null;
    third?: ObjectUnionExplicitPointer | null;
  }): Promise<ObjectUnionExplicitPointer | null>;
}