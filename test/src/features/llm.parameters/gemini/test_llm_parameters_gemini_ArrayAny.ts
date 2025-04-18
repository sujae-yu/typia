import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ArrayAny = 
  _test_llm_parameters({
    model: "gemini",
    name: "ArrayAny",
  })(
    typia.llm.parameters<ArrayAnyParameters, "gemini">(),
  );

interface ArrayAnyParameters {
  regular: ArrayAny;
  nullable: ArrayAny | null;
  optional: ArrayAny | undefined;
  faint: ArrayAny | null | undefined;
  array: Array<ArrayAny>;
}