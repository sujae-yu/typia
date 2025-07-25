import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertGuardEqualsCustom_AtomicClass = (): void =>
  _test_assertGuardEquals(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(typia.createAssertGuardEquals<AtomicClass>((p) => new CustomGuardError(p)));
