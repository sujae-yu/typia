import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createIsEncode_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_isEncode(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      encode:
        typia.protobuf.createIsEncode<ArrayRecursiveUnionExplicitPointer>(),
      decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
      message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
