import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_applicationOfValidate_claude_ObjectLiteralProperty =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectLiteralProperty",
    factory: ObjectLiteralProperty,
  })(
    typia.llm.applicationOfValidate<
      ObjectLiteralPropertyApplication,
      "claude"
    >(),
  );

interface ObjectLiteralPropertyApplication {
  insert(p: { first: ObjectLiteralProperty }): Promise<void>;
  reduce(p: {
    first: ObjectLiteralProperty;
    second: ObjectLiteralProperty | null;
  }): Promise<ObjectLiteralProperty>;
  coalesce(p: {
    first: ObjectLiteralProperty | null;
    second: ObjectLiteralProperty | null;
    third?: ObjectLiteralProperty | null;
  }): Promise<ObjectLiteralProperty | null>;
}