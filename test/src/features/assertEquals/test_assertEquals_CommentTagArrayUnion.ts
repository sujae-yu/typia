import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assertEquals_CommentTagArrayUnion = (): void =>
  _test_assertEquals(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.assertEquals<CommentTagArrayUnion>(input),
  );
