import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_validateParse_DynamicTree = (): void =>
  _test_json_validateParse("DynamicTree")<DynamicTree>(DynamicTree)((input) =>
    typia.json.validateParse<DynamicTree>(input),
  );
