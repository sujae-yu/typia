import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createIsStringify_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_isStringify(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.json.createIsStringify<ArrayRecursiveUnionExplicitPointer>(),
    );
