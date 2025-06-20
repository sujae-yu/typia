import typia from "typia";

export const $defs = {};
export const schema = ((props) => {
  if (undefined !== props?.$defs)
    Object.assign(props.$defs, {
      IBbsArticle: {
        description:
          "Article entity.\n\n`IBbsArticle` is an entity representing an article in the BBS (Bulletin Board System).",
        type: "object",
        properties: {
          id: {
            title: "Primary Key",
            description: "Primary Key.\n\n\n@format uuid",
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
              "Content body.\n\nContent body of the article writtn in the markdown format.",
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
        },
        required: [
          "id",
          "title",
          "body",
          "thumbnail",
          "created_at",
          "updated_at",
        ],
      },
    });
  return {
    $ref: "#/$defs/IBbsArticle",
  };
})({
  $defs,
});
