import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_isParse_ArrayHierarchicalPointer = (): void =>
  _test_json_isParse("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) => typia.json.isParse<ArrayHierarchicalPointer>(input));
