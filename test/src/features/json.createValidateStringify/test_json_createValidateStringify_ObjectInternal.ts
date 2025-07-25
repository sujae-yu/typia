import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createValidateStringify_ObjectInternal = (): void =>
  _test_json_validateStringify("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )(typia.json.createValidateStringify<ObjectInternal>());
