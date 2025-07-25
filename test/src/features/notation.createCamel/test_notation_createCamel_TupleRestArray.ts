import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_createValidateCamel_TupleRestArray = (): void =>
  _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )<typia.CamelCase<TupleRestArray>>({
    convert: typia.notations.createValidateCamel<TupleRestArray>(),
    assert: typia.createAssert<typia.CamelCase<TupleRestArray>>(),
  });
