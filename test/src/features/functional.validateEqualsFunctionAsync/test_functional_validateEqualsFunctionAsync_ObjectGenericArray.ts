import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_validateEqualsFunctionAsync_ObjectGenericArray =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectGenericArray")(
      ObjectGenericArray,
    )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.validateEqualsFunction(p),
    );
