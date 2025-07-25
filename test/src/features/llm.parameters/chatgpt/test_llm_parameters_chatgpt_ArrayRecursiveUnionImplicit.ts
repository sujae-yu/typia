import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_parameters_chatgpt_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_llm_parameters({
      model: "chatgpt",
      name: "ArrayRecursiveUnionImplicit",
    })(
      typia.llm.parameters<ArrayRecursiveUnionImplicitParameters, "chatgpt">(),
    );

interface ArrayRecursiveUnionImplicitParameters {
  regular: ArrayRecursiveUnionImplicit;
  nullable: ArrayRecursiveUnionImplicit | null;
  optional: ArrayRecursiveUnionImplicit | undefined;
  faint: ArrayRecursiveUnionImplicit | null | undefined;
  array: Array<ArrayRecursiveUnionImplicit>;
}
