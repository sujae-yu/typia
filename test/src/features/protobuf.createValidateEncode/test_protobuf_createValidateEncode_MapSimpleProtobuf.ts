import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createValidateEncode_MapSimpleProtobuf = (): void =>
  _test_protobuf_validateEncode("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )({
    encode: typia.protobuf.createValidateEncode<MapSimpleProtobuf>(),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
  });
