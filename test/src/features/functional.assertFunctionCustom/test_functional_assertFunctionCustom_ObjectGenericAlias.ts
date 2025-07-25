import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertFunctionCustom_ObjectGenericAlias =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectGenericAlias")(
      ObjectGenericAlias,
    )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
