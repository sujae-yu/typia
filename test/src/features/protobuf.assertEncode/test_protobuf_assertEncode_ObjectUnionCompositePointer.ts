import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_assertEncode_ObjectUnionCompositePointer =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
      encode: (input) =>
        typia.protobuf.assertEncode<ObjectUnionCompositePointer>(input),
      decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
      message: typia.protobuf.message<ObjectUnionCompositePointer>(),
    });
