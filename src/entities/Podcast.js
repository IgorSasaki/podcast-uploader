const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Podcast",
  tableName: "podcasts",
  columns: {
    id: { primary: true, type: "int", generated: true },
    name: { type: "varchar" },
    description: { type: "text" },
    author: { type: "varchar" },
    coverImage: { type: "varchar", nullable: true },
    publishedAt: {
      type: "datetime",
    },
    createdAt: {
      type: "datetime",
      createDate: true,
    },
  },
  relations: {
    episodes: {
      target: "Episode",
      type: "one-to-many",
      inverseSide: "podcast",
      cascade: true,
    },
  },
});
