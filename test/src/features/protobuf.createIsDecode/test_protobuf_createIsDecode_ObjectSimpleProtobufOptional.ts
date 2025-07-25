import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createIsDecode_ObjectSimpleProtobufOptional =
  (): void =>
    _test_protobuf_isDecode(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
      decode: typia.protobuf.createIsDecode<ObjectSimpleProtobufOptional>(),
      encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });
