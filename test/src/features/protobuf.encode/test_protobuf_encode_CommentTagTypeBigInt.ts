import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_encode_CommentTagTypeBigInt = (): void =>
  _test_protobuf_encode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    encode: (input) => typia.protobuf.encode<CommentTagTypeBigInt>(input),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
  });
