import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsParametersCustom_CommentTagFormat =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "CommentTagFormat",
    )(CommentTagFormat)((p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
