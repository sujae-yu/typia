import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validate_ObjectPropertyNullable = (): void =>
  _test_validate("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )((input) => typia.validate<ObjectPropertyNullable>(input));
