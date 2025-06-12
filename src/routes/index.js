const { Router } = require("express");
const multer = require("../config/multer");
const PodcastController = require("../controllers/podcast.controller");
const EpisodeController = require("../controllers/episode.controller");

const routes = Router();

routes.post("/podcasts", PodcastController.create);
routes.get("/podcasts", PodcastController.list);

routes.post(
  "/episodes",
  multer.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  EpisodeController.upload
);
routes.get("/podcasts/:podcastId/episodes", EpisodeController.listByPodcast);

module.exports = routes;
