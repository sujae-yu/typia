import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_stringify_ObjectNullable = (): void =>
  _test_json_stringify("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    (input) => typia.json.stringify<ObjectNullable>(input),
  );
