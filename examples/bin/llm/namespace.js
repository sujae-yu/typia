import typia from "typia";
import * as __typia_transform__isFormatUri from "typia/lib/internal/_isFormatUri.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

const app = {
  model: "chatgpt",
  options: {
    reference: false,
    strict: false,
    separate: null,
  },
  functions: [
    {
      name: "create",
      parameters: {
        description: " Properties of create function",
        type: "object",
        properties: {
          input: {
            description:
              "Information of the article to create\n\n------------------------------\n\nDescription of the current {@link IBbsArticle.ICreate} type:\n\n> Information of the article to create.\n\n------------------------------\n\nDescription of the parent {@link IBbsArticle} type:\n\n> Article entity.\n> \n> `IBbsArticle` is an entity representing an article in the BBS (Bulletin Board System).",
            type: "object",
            properties: {
              title: {
                title: "Title of the article",
                description:
                  "Title of the article.\n\nRepresentative title of the article.",
                type: "string",
              },
              body: {
                title: "Content body",
                description:
                  "Content body.\n\nContent body of the article written in the markdown format.",
                type: "string",
              },
              thumbnail: {
                title: "Thumbnail image URI",
                description:
                  "Thumbnail image URI.\n\nThumbnail image URI which can represent the article.\n\nIf configured as `null`, it means that no thumbnail image in the article.",
                anyOf: [
                  {
                    type: "null",
                  },
                  {
                    type: "string",
                    description: "@format uri\n@contentMediaType image/*",
                  },
                ],
              },
            },
            required: ["title", "body", "thumbnail"],
          },
        },
        required: ["input"],
        additionalProperties: false,
        $defs: {},
      },
      output: {
        description:
          "Description of the current {@link IBbsArticle} type:\n\n> Article entity.\n> \n> `IBbsArticle` is an entity representing an article in the BBS (Bulletin Board System).",
        type: "object",
        properties: {
          id: {
            title: "Primary Key",
            description: "Primary Key.\n\n\n@format uuid",
            type: "string",
          },
          created_at: {
            title: "Creation time of the article",
            description: "Creation time of the article.\n\n\n@format date-time",
            type: "string",
          },
          updated_at: {
            title: "Last updated time of the article",
            description:
              "Last updated time of the article.\n\n\n@format date-time",
            type: "string",
          },
          title: {
            title: "Title of the article",
            description:
              "Title of the article.\n\nRepresentative title of the article.",
            type: "string",
          },
          body: {
            title: "Content body",
            description:
              "Content body.\n\nContent body of the article written in the markdown format.",
            type: "string",
          },
          thumbnail: {
            title: "Thumbnail image URI",
            description:
              "Thumbnail image URI.\n\nThumbnail image URI which can represent the article.\n\nIf configured as `null`, it means that no thumbnail image in the article.",
            anyOf: [
              {
                type: "null",
              },
              {
                type: "string",
                description: "@format uri\n@contentMediaType image/*",
              },
            ],
          },
        },
        required: [
          "id",
          "created_at",
          "updated_at",
          "title",
          "body",
          "thumbnail",
        ],
      },
      description:
        "Create a new article.\n\nWrites a new article and archives it into the DB.",
      validate: (() => {
        const _io0 = (input) =>
          "object" === typeof input.input &&
          null !== input.input &&
          _io1(input.input);
        const _io1 = (input) =>
          "string" === typeof input.title &&
          "string" === typeof input.body &&
          (null === input.thumbnail ||
            ("string" === typeof input.thumbnail &&
              __typia_transform__isFormatUri._isFormatUri(input.thumbnail)));
        const _vo0 = (input, _path, _exceptionable = true) =>
          [
            ((("object" === typeof input.input && null !== input.input) ||
              _report(_exceptionable, {
                path: _path + ".input",
                expected: "IBbsArticle.ICreate",
                value: input.input,
              })) &&
              _vo1(input.input, _path + ".input", true && _exceptionable)) ||
              _report(_exceptionable, {
                path: _path + ".input",
                expected: "IBbsArticle.ICreate",
                value: input.input,
              }),
          ].every((flag) => flag);
        const _vo1 = (input, _path, _exceptionable = true) =>
          [
            "string" === typeof input.title ||
              _report(_exceptionable, {
                path: _path + ".title",
                expected: "string",
                value: input.title,
              }),
            "string" === typeof input.body ||
              _report(_exceptionable, {
                path: _path + ".body",
                expected: "string",
                value: input.body,
              }),
            null === input.thumbnail ||
              ("string" === typeof input.thumbnail &&
                (__typia_transform__isFormatUri._isFormatUri(input.thumbnail) ||
                  _report(_exceptionable, {
                    path: _path + ".thumbnail",
                    expected: 'string & Format<"uri">',
                    value: input.thumbnail,
                  }))) ||
              _report(_exceptionable, {
                path: _path + ".thumbnail",
                expected:
                  '((string & Format<"uri"> & ContentMediaType<"image/*">) | null)',
                value: input.thumbnail,
              }),
          ].every((flag) => flag);
        const __is = (input) =>
          "object" === typeof input && null !== input && _io0(input);
        let errors;
        let _report;
        return (input) => {
          if (false === __is(input)) {
            errors = [];
            _report = __typia_transform__validateReport._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : {
                  success,
                  errors,
                  data: input,
                };
          }
          return {
            success: true,
            data: input,
          };
        };
      })(),
    },
    {
      name: "update",
      parameters: {
        description: " Properties of update function",
        type: "object",
        properties: {
          id: {
            title: "Target article's {@link IBbsArticle.id}",
            description:
              "Target article's {@link IBbsArticle.id}.\n\n\n@format uuid",
            type: "string",
          },
          input: {
            description:
              "New content to update.\n\n------------------------------\n\nDescription of the current {@link PartialIBbsArticle.ICreate} type:\n\n> Make all properties in T optional",
            type: "object",
            properties: {
              title: {
                title: "Title of the article",
                description:
                  "Title of the article.\n\nRepresentative title of the article.",
                type: "string",
              },
              body: {
                title: "Content body",
                description:
                  "Content body.\n\nContent body of the article written in the markdown format.",
                type: "string",
              },
              thumbnail: {
                title: "Thumbnail image URI",
                description:
                  "Thumbnail image URI.\n\nThumbnail image URI which can represent the article.\n\nIf configured as `null`, it means that no thumbnail image in the article.",
                anyOf: [
                  {
                    type: "null",
                  },
                  {
                    type: "string",
                    description: "@format uri\n@contentMediaType image/*",
                  },
                ],
              },
            },
            required: [],
          },
        },
        required: ["id", "input"],
        additionalProperties: false,
        $defs: {},
      },
      description: "Update an article.\n\nUpdates an article with new content.",
      validate: (() => {
        const _io0 = (input) =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "object" === typeof input.input &&
          null !== input.input &&
          false === Array.isArray(input.input) &&
          _io1(input.input);
        const _io1 = (input) =>
          (undefined === input.title || "string" === typeof input.title) &&
          (undefined === input.body || "string" === typeof input.body) &&
          (null === input.thumbnail ||
            undefined === input.thumbnail ||
            ("string" === typeof input.thumbnail &&
              __typia_transform__isFormatUri._isFormatUri(input.thumbnail)));
        const _vo0 = (input, _path, _exceptionable = true) =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            ((("object" === typeof input.input &&
              null !== input.input &&
              false === Array.isArray(input.input)) ||
              _report(_exceptionable, {
                path: _path + ".input",
                expected: "Partial<IBbsArticle.ICreate>",
                value: input.input,
              })) &&
              _vo1(input.input, _path + ".input", true && _exceptionable)) ||
              _report(_exceptionable, {
                path: _path + ".input",
                expected: "Partial<IBbsArticle.ICreate>",
                value: input.input,
              }),
          ].every((flag) => flag);
        const _vo1 = (input, _path, _exceptionable = true) =>
          [
            undefined === input.title ||
              "string" === typeof input.title ||
              _report(_exceptionable, {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              }),
            undefined === input.body ||
              "string" === typeof input.body ||
              _report(_exceptionable, {
                path: _path + ".body",
                expected: "(string | undefined)",
                value: input.body,
              }),
            null === input.thumbnail ||
              undefined === input.thumbnail ||
              ("string" === typeof input.thumbnail &&
                (__typia_transform__isFormatUri._isFormatUri(input.thumbnail) ||
                  _report(_exceptionable, {
                    path: _path + ".thumbnail",
                    expected: 'string & Format<"uri">',
                    value: input.thumbnail,
                  }))) ||
              _report(_exceptionable, {
                path: _path + ".thumbnail",
                expected:
                  '((string & Format<"uri"> & ContentMediaType<"image/*">) | null | undefined)',
                value: input.thumbnail,
              }),
          ].every((flag) => flag);
        const __is = (input) =>
          "object" === typeof input && null !== input && _io0(input);
        let errors;
        let _report;
        return (input) => {
          if (false === __is(input)) {
            errors = [];
            _report = __typia_transform__validateReport._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : {
                  success,
                  errors,
                  data: input,
                };
          }
          return {
            success: true,
            data: input,
          };
        };
      })(),
    },
    {
      name: "erase",
      parameters: {
        description: " Properties of erase function",
        type: "object",
        properties: {
          id: {
            title: "Target article's {@link IBbsArticle.id}",
            description:
              "Target article's {@link IBbsArticle.id}.\n\n\n@format uuid",
            type: "string",
          },
        },
        required: ["id"],
        additionalProperties: false,
        $defs: {},
      },
      description: "Erase an article.\n\nErases an article from the DB.",
      validate: (() => {
        const _io0 = (input) =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id);
        const _vo0 = (input, _path, _exceptionable = true) =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
          ].every((flag) => flag);
        const __is = (input) =>
          "object" === typeof input && null !== input && _io0(input);
        let errors;
        let _report;
        return (input) => {
          if (false === __is(input)) {
            errors = [];
            _report = __typia_transform__validateReport._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : {
                  success,
                  errors,
                  data: input,
                };
          }
          return {
            success: true,
            data: input,
          };
        };
      })(),
    },
  ],
};
const func = app.functions.find((func) => func.name === "create");
console.log(func?.description);
