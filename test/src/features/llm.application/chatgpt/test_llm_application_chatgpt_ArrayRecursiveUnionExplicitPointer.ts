import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_application_chatgpt_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_llm_application({
      model: "chatgpt",
      name: "ArrayRecursiveUnionExplicitPointer",
      factory: ArrayRecursiveUnionExplicitPointer,
    })(
      typia.llm.application<
        ArrayRecursiveUnionExplicitPointerApplication,
        "chatgpt"
      >(),
    );

interface ArrayRecursiveUnionExplicitPointerApplication {
  insert(p: { first: ArrayRecursiveUnionExplicitPointer }): Promise<void>;
  reduce(p: {
    first: ArrayRecursiveUnionExplicitPointer;
    second: ArrayRecursiveUnionExplicitPointer | null;
  }): Promise<ArrayRecursiveUnionExplicitPointer>;
  coalesce(p: {
    first: ArrayRecursiveUnionExplicitPointer | null;
    second: ArrayRecursiveUnionExplicitPointer | null;
    third?: ArrayRecursiveUnionExplicitPointer | null;
  }): Promise<ArrayRecursiveUnionExplicitPointer | null>;
}
