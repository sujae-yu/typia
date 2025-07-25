import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertEquals_AtomicIntersection = (): void =>
  _test_assertEquals(TypeGuardError)("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input) => typia.assertEquals<AtomicIntersection>(input));
