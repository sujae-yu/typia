import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createIsEncode_ObjectSimpleProtobufNullable =
  (): void =>
    _test_protobuf_isEncode(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
      encode: typia.protobuf.createIsEncode<ObjectSimpleProtobufNullable>(),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
      message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
    });
