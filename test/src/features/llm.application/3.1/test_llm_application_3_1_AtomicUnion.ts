import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_application_3_1_AtomicUnion = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "AtomicUnion",
    factory: AtomicUnion,
  })(typia.llm.application<AtomicUnionApplication, "3.1">());

interface AtomicUnionApplication {
  insert(p: { first: AtomicUnion }): Promise<void>;
  reduce(p: {
    first: AtomicUnion;
    second: AtomicUnion | null;
  }): Promise<AtomicUnion>;
  coalesce(p: {
    first: AtomicUnion | null;
    second: AtomicUnion | null;
    third?: AtomicUnion | null;
  }): Promise<AtomicUnion | null>;
}
