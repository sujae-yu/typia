import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_applicationEquals_claude_ObjectUnionImplicit = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectUnionImplicit",
    factory: ObjectUnionImplicit,
  })(
    typia.llm.application<
      ObjectUnionImplicitApplication,
      "claude",
      { equals: true }
    >(),
  );

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
