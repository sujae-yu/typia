import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_llm_application_gemini_ConstantAtomicAbsorbed =
  _test_llm_application({
    model: "gemini",
    name: "ConstantAtomicAbsorbed",
  })(typia.llm.application<ConstantAtomicAbsorbedApplication, "gemini">());

interface ConstantAtomicAbsorbedApplication {
  insert(p: { first: ConstantAtomicAbsorbed }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicAbsorbed;
    second: ConstantAtomicAbsorbed | null;
  }): Promise<ConstantAtomicAbsorbed>;
  coalesce(p: {
    first: ConstantAtomicAbsorbed | null;
    second: ConstantAtomicAbsorbed | null;
    third?: ConstantAtomicAbsorbed | null;
  }): Promise<ConstantAtomicAbsorbed | null>;
}