const { Router } = require("express");
const multer = require("../config/multer");
const PodcastController = require("../controllers/PodcastController");
const EpisodeController = require("../controllers/EpisodeController");

const routes = Router();

routes.post("/podcasts", PodcastController.create);
routes.get("/podcasts", PodcastController.list);

routes.post("/episodes", multer.single("audio"), EpisodeController.upload);
routes.get("/podcasts/:podcastId/episodes", EpisodeController.listByPodcast);

module.exports = routes;
