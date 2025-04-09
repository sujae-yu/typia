import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_schema_v3_0_CommentTagAtomicUnion = _test_json_schema({
  version: "3.0",
  name: "CommentTagAtomicUnion",
})(typia.json.schema<CommentTagAtomicUnion, "3.0">());
