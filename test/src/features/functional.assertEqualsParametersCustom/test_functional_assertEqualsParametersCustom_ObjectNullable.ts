import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsParametersCustom_ObjectNullable =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ObjectNullable")(
      ObjectNullable,
    )((p: (input: ObjectNullable) => ObjectNullable) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
