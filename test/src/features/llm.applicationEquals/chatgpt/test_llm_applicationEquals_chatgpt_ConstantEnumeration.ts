import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_applicationEquals_chatgpt_ConstantEnumeration =
  (): void =>
    _test_llm_applicationEquals({
      model: "chatgpt",
      name: "ConstantEnumeration",
      factory: ConstantEnumeration,
    })(
      typia.llm.application<
        ConstantEnumerationApplication,
        "chatgpt",
        { equals: true }
      >(),
    );

interface ConstantEnumerationApplication {
  insert(p: { first: ConstantEnumeration }): Promise<void>;
  reduce(p: {
    first: ConstantEnumeration;
    second: ConstantEnumeration | null;
  }): Promise<ConstantEnumeration>;
  coalesce(p: {
    first: ConstantEnumeration | null;
    second: ConstantEnumeration | null;
    third?: ConstantEnumeration | null;
  }): Promise<ConstantEnumeration | null>;
}
