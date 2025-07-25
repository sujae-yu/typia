import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createValidateEncode_TypeTagTypeUnion = (): void =>
  _test_protobuf_validateEncode("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )({
    encode: typia.protobuf.createValidateEncode<TypeTagTypeUnion>(),
    decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
    message: typia.protobuf.message<TypeTagTypeUnion>(),
  });
