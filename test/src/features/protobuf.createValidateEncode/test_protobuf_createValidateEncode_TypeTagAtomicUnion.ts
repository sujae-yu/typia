import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createValidateEncode_TypeTagAtomicUnion = (): void =>
  _test_protobuf_validateEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )({
    encode: typia.protobuf.createValidateEncode<TypeTagAtomicUnion>(),
    decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    message: typia.protobuf.message<TypeTagAtomicUnion>(),
  });
