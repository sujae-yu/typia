import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_parameters_3_0_TypeTagCustom = _test_llm_parameters({
  model: "3.0",
  name: "TypeTagCustom",
})(typia.llm.parameters<TypeTagCustomParameters, "3.0">());

interface TypeTagCustomParameters {
  regular: TypeTagCustom;
  nullable: TypeTagCustom | null;
  optional: TypeTagCustom | undefined;
  faint: TypeTagCustom | null | undefined;
  array: Array<TypeTagCustom>;
}
