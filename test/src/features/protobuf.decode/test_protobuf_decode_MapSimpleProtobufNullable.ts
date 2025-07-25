import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_decode_MapSimpleProtobufNullable = (): void =>
  _test_protobuf_decode("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable,
  )({
    decode: (input) => typia.protobuf.decode<MapSimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
  });
