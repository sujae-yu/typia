import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_applicationOfValidate_3_0_ConstantAtomicUnion =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ConstantAtomicUnion",
    factory: ConstantAtomicUnion,
  })(typia.llm.applicationOfValidate<ConstantAtomicUnionApplication, "3.0">());

interface ConstantAtomicUnionApplication {
  insert(p: { first: ConstantAtomicUnion }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicUnion;
    second: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion>;
  coalesce(p: {
    first: ConstantAtomicUnion | null;
    second: ConstantAtomicUnion | null;
    third?: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion | null>;
}