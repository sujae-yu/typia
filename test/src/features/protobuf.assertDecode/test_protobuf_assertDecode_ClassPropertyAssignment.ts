import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_assertDecode_ClassPropertyAssignment = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    decode: (input) =>
      typia.protobuf.assertDecode<ClassPropertyAssignment>(input),
    encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
  });
