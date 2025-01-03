import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_applicationOfValidate_3_1_ObjectUnionImplicit =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectUnionImplicit",
    factory: ObjectUnionImplicit,
  })(typia.llm.applicationOfValidate<ObjectUnionImplicitApplication, "3.1">());

interface ObjectUnionImplicitApplication {
  insert(p: { first: ObjectUnionImplicit }): Promise<void>;
  reduce(p: {
    first: ObjectUnionImplicit;
    second: ObjectUnionImplicit | null;
  }): Promise<ObjectUnionImplicit>;
  coalesce(p: {
    first: ObjectUnionImplicit | null;
    second: ObjectUnionImplicit | null;
    third?: ObjectUnionImplicit | null;
  }): Promise<ObjectUnionImplicit | null>;
}
