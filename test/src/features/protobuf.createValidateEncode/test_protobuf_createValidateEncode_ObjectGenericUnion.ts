import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createValidateEncode_ObjectGenericUnion = (): void =>
  _test_protobuf_validateEncode("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )({
    encode: typia.protobuf.createValidateEncode<ObjectGenericUnion>(),
    decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
    message: typia.protobuf.message<ObjectGenericUnion>(),
  });
