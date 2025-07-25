import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertGuardCustom_TypeTagTuple = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(typia.createAssertGuard<TypeTagTuple>((p) => new CustomGuardError(p)));
