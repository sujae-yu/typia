import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_json_application_v3_1_DynamicEnumeration =
  _test_json_application({
    version: "3.1",
    name: "DynamicEnumeration",
  })({
    version: "3.1",
    components: {
      schemas: {
        DynamicEnumeration: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                ar: {
                  type: "string",
                },
                "zh-Hans": {
                  type: "string",
                },
                "zh-Hant": {
                  type: "string",
                },
                en: {
                  type: "string",
                },
                fr: {
                  type: "string",
                },
                de: {
                  type: "string",
                },
                ja: {
                  type: "string",
                },
                ko: {
                  type: "string",
                },
                pt: {
                  type: "string",
                },
                ru: {
                  type: "string",
                },
              },
            },
          },
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/DynamicEnumeration",
      },
    ],
  });