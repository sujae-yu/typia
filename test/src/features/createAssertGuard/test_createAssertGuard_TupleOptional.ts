import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertGuard_TupleOptional = (): void =>
  _test_assertGuard(TypeGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )(typia.createAssertGuard<TupleOptional>());
