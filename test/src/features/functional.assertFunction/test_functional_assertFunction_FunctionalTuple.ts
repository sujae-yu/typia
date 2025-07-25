import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertFunction_FunctionalTuple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertFunction(p),
  );
