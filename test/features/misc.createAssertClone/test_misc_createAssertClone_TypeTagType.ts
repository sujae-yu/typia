import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_assertClone_TypeTagType = _test_misc_assertClone(
    "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.misc.createAssertClone<TypeTagType>());