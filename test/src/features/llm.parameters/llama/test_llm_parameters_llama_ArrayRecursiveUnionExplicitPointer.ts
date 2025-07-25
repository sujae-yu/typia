import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_parameters_llama_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_llm_parameters({
      model: "llama",
      name: "ArrayRecursiveUnionExplicitPointer",
    })(
      typia.llm.parameters<
        ArrayRecursiveUnionExplicitPointerParameters,
        "llama"
      >(),
    );

interface ArrayRecursiveUnionExplicitPointerParameters {
  regular: ArrayRecursiveUnionExplicitPointer;
  nullable: ArrayRecursiveUnionExplicitPointer | null;
  optional: ArrayRecursiveUnionExplicitPointer | undefined;
  faint: ArrayRecursiveUnionExplicitPointer | null | undefined;
  array: Array<ArrayRecursiveUnionExplicitPointer>;
}
