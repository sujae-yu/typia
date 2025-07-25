import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createEncode_ObjectHttpAtomic = (): void =>
  _test_protobuf_encode("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    {
      encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
      decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
      message: typia.protobuf.message<ObjectHttpAtomic>(),
    },
  );
