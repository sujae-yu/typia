import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_validateStringify_ArrayAtomicSimple = (): void =>
  _test_json_validateStringify("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )((input) => typia.json.validateStringify<ArrayAtomicSimple>(input));
