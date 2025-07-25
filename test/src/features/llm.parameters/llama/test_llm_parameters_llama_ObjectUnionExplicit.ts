import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_parameters_llama_ObjectUnionExplicit = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectUnionExplicit",
  })(typia.llm.parameters<ObjectUnionExplicitParameters, "llama">());

interface ObjectUnionExplicitParameters {
  regular: ObjectUnionExplicit;
  nullable: ObjectUnionExplicit | null;
  optional: ObjectUnionExplicit | undefined;
  faint: ObjectUnionExplicit | null | undefined;
  array: Array<ObjectUnionExplicit>;
}
