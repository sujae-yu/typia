import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createIsDecode_TemplateConstant = (): void =>
  _test_protobuf_isDecode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    decode: typia.protobuf.createIsDecode<TemplateConstant>(),
    encode: typia.protobuf.createEncode<TemplateConstant>(),
  });
