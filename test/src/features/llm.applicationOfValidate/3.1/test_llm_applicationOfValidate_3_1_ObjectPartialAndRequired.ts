import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_applicationOfValidate_3_1_ObjectPartialAndRequired =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectPartialAndRequired",
    factory: ObjectPartialAndRequired,
  })(
    typia.llm.applicationOfValidate<
      ObjectPartialAndRequiredApplication,
      "3.1"
    >(),
  );

interface ObjectPartialAndRequiredApplication {
  insert(p: { first: ObjectPartialAndRequired }): Promise<void>;
  reduce(p: {
    first: ObjectPartialAndRequired;
    second: ObjectPartialAndRequired | null;
  }): Promise<ObjectPartialAndRequired>;
  coalesce(p: {
    first: ObjectPartialAndRequired | null;
    second: ObjectPartialAndRequired | null;
    third?: ObjectPartialAndRequired | null;
  }): Promise<ObjectPartialAndRequired | null>;
}