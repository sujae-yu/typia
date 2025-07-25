import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createQuery_ObjectHttpTypeTag = (): void =>
  _test_http_query("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.http.createQuery<ObjectHttpTypeTag>(),
  );
