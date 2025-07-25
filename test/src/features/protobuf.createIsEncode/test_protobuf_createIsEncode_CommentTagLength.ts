import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createIsEncode_CommentTagLength = (): void =>
  _test_protobuf_isEncode("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )({
    encode: typia.protobuf.createIsEncode<CommentTagLength>(),
    decode: typia.protobuf.createDecode<CommentTagLength>(),
    message: typia.protobuf.message<CommentTagLength>(),
  });
