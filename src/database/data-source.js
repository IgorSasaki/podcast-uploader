const { DataSource } = require("typeorm");
const Podcast = require("../entities/Podcast");
const Episode = require("../entities/Episode");
const User = require("../entities/User");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [User, Podcast, Episode],
});

module.exports = { AppDataSource };
