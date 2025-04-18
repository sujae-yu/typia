import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_llama_ArrayMatrix = 
  _test_llm_parameters({
    model: "llama",
    name: "ArrayMatrix",
  })(
    typia.llm.parameters<ArrayMatrixParameters, "llama">(),
  );

interface ArrayMatrixParameters {
  regular: ArrayMatrix;
  nullable: ArrayMatrix | null;
  optional: ArrayMatrix | undefined;
  faint: ArrayMatrix | null | undefined;
  array: Array<ArrayMatrix>;
}