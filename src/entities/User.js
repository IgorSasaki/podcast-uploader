const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: { type: "int", primary: true, generated: true },
    name: { type: "varchar" },
    email: { type: "varchar", unique: true },
    password: { type: "varchar" },
    createdAt: { type: "datetime", createDate: true },
  },
  relations: {
    podcasts: {
      target: "Podcast",
      type: "one-to-many",
      inverseSide: "createdBy",
    },
    episodes: {
      target: "Episode",
      type: "one-to-many",
      inverseSide: "createdBy",
    },
  },
});
