const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Episode",
  tableName: "episodes",
  columns: {
    id: { primary: true, type: "int", generated: true },
    title: { type: "varchar" },
    description: { type: "text" },
    audioPath: { type: "varchar" },
    coverImagePath: { type: "varchar", nullable: true },
    duration: { type: "int" },
    publishedAt: { type: "datetime" },
    createdAt: { type: "datetime", createDate: true },
  },
  relations: {
    podcast: {
      target: "Podcast",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "CASCADE",
    },
    createdBy: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "SET NULL",
    },
  },
});
