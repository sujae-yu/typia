import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createDecode_TypeTagFormat = (): void =>
  _test_protobuf_decode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
  });
