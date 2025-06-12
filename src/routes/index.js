const { Router } = require("express");
const multer = require("../config/multer");
const AuthController = require("../controllers/auth.controller");
const PodcastController = require("../controllers/podcast.controller");
const EpisodeController = require("../controllers/episode.controller");

const ensureAuth = require("../middlewares/ensureAuth");

const routes = Router();

// auth
routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.login);

// protected routes
routes.post("/podcasts", ensureAuth, PodcastController.create);
routes.get("/podcasts", ensureAuth, PodcastController.list);

routes.post(
  "/episodes",
  ensureAuth,
  multer.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  EpisodeController.upload
);

routes.get(
  "/podcasts/:podcastId/episodes",
  ensureAuth,
  EpisodeController.listByPodcast
);

module.exports = routes;
