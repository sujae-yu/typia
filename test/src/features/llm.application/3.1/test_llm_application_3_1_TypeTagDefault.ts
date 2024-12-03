import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_application_3_1_TypeTagDefault = _test_llm_application({
  model: "3.1",
  name: "TypeTagDefault",
})(typia.llm.application<TypeTagDefaultApplication, "3.1">());

interface TypeTagDefaultApplication {
  insert(p: { first: TypeTagDefault }): Promise<void>;
  reduce(p: {
    first: TypeTagDefault;
    second: TypeTagDefault | null;
  }): Promise<TypeTagDefault>;
  coalesce(p: {
    first: TypeTagDefault | null;
    second: TypeTagDefault | null;
    third?: TypeTagDefault | null;
  }): Promise<TypeTagDefault | null>;
}