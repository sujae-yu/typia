import {
  ClaudeTypeChecker,
  IClaudeSchema,
  ILlmApplication,
} from "@samchon/openapi";
import typia from "typia";

import { BbsArticleService } from "./BbsArticleService";

const app: ILlmApplication<"claude"> = typia.llm.application<
  BbsArticleService,
  "claude"
>({
  separate: (schema: IClaudeSchema) =>
    ClaudeTypeChecker.isString(schema) && schema.contentMediaType !== undefined,
});
console.log(app);
