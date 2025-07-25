import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_parameters_chatgpt_ConstantAtomicTagged = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ConstantAtomicTagged",
  })(typia.llm.parameters<ConstantAtomicTaggedParameters, "chatgpt">());

interface ConstantAtomicTaggedParameters {
  regular: ConstantAtomicTagged;
  nullable: ConstantAtomicTagged | null;
  optional: ConstantAtomicTagged | undefined;
  faint: ConstantAtomicTagged | null | undefined;
  array: Array<ConstantAtomicTagged>;
}
