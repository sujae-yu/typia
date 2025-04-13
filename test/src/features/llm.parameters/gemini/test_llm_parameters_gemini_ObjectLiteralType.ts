import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectLiteralType = 
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectLiteralType",
  })(
    typia.llm.parameters<ObjectLiteralTypeParameters, "gemini">(),
  );

interface ObjectLiteralTypeParameters {
  regular: ObjectLiteralType;
  nullable: ObjectLiteralType | null;
  optional: ObjectLiteralType | undefined;
  faint: ObjectLiteralType | null | undefined;
  array: Array<ObjectLiteralType>;
}