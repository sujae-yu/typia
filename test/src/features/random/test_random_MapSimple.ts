import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapSimple } from "../../structures/MapSimple";

export const test_random_MapSimple = (): void =>
  _test_random("MapSimple")<MapSimple>(MapSimple)({
    random: () => typia.random<MapSimple>((MapSimple as any).RANDOM),
    assert: typia.createAssert<MapSimple>(),
  });
