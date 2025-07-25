import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertReturn_FunctionalTuple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertReturn(p),
  );
