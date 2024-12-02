import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_llm_parameters_3_0_ClassMethod = _test_llm_parameters({
  model: "3.0",
  name: "ClassMethod",
})(typia.llm.parameters<ClassMethodParameters, "3.0">());

interface ClassMethodParameters {
  regular: ClassMethod;
  nullable: ClassMethod | null;
  optional: ClassMethod | undefined;
  faint: ClassMethod | null | undefined;
  array: Array<ClassMethod>;
}
