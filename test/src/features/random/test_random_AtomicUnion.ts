import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_random_AtomicUnion = (): void =>
  _test_random("AtomicUnion")<AtomicUnion>(AtomicUnion)({
    random: () => typia.random<AtomicUnion>((AtomicUnion as any).RANDOM),
    assert: typia.createAssert<AtomicUnion>(),
  });
