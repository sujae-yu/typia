import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_applicationOfValidate_3_1_ObjectGenericArray =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectGenericArray",
    factory: ObjectGenericArray,
  })(typia.llm.applicationOfValidate<ObjectGenericArrayApplication, "3.1">());

interface ObjectGenericArrayApplication {
  insert(p: { first: ObjectGenericArray }): Promise<void>;
  reduce(p: {
    first: ObjectGenericArray;
    second: ObjectGenericArray | null;
  }): Promise<ObjectGenericArray>;
  coalesce(p: {
    first: ObjectGenericArray | null;
    second: ObjectGenericArray | null;
    third?: ObjectGenericArray | null;
  }): Promise<ObjectGenericArray | null>;
}