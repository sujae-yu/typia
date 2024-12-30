import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_applicationOfValidate_llama_ObjectUndefined =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ObjectUndefined",
    factory: ObjectUndefined,
  })(typia.llm.applicationOfValidate<ObjectUndefinedApplication, "llama">());

interface ObjectUndefinedApplication {
  insert(p: { first: ObjectUndefined }): Promise<void>;
  reduce(p: {
    first: ObjectUndefined;
    second: ObjectUndefined | null;
  }): Promise<ObjectUndefined>;
  coalesce(p: {
    first: ObjectUndefined | null;
    second: ObjectUndefined | null;
    third?: ObjectUndefined | null;
  }): Promise<ObjectUndefined | null>;
}