import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_validateDecode_ClassMethod =
    _test_protobuf_validateDecode("ClassMethod")<ClassMethod>(ClassMethod)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ClassMethod>(input),
        encode: typia.protobuf.createEncode<ClassMethod>(),
    });
