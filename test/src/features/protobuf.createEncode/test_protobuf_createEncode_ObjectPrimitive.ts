import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createEncode_ObjectPrimitive = (): void =>
  _test_protobuf_encode("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)({
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
  });
