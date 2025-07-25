import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_encode_TypeTagArray = (): void =>
  _test_protobuf_encode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
    encode: (input) => typia.protobuf.encode<TypeTagArray>(input),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
    message: typia.protobuf.message<TypeTagArray>(),
  });
