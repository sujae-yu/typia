import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_createValidateCamel_ArraySimple = (): void =>
  _test_notation_validateGeneral("ArraySimple")<ArraySimple>(ArraySimple)<
    typia.CamelCase<ArraySimple>
  >({
    convert: typia.notations.createValidateCamel<ArraySimple>(),
    assert: typia.createAssert<typia.CamelCase<ArraySimple>>(),
  });
