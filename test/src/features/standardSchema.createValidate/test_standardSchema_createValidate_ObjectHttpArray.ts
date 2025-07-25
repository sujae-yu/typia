import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_standardSchema_createValidate_ObjectHttpArray = (): void =>
  _test_standardSchema_validate("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.createValidate<ObjectHttpArray>());
