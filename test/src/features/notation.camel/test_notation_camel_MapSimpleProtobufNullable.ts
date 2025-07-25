import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_validateCamel_MapSimpleProtobufNullable = (): void =>
  _test_notation_validateGeneral(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)<
    typia.CamelCase<MapSimpleProtobufNullable>
  >({
    convert: (input) =>
      typia.notations.validateCamel<MapSimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.CamelCase<MapSimpleProtobufNullable>>(),
  });
