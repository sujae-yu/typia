import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsReturn_ObjectRecursive = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertEqualsReturn(p),
  );
