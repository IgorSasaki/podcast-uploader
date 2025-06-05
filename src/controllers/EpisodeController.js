const EpisodeService = require("../services/EpisodeService");
const { AppDataSource } = require("../database/data-source");
const episodeRepo = AppDataSource.getRepository("Episode");
const service = new EpisodeService(episodeRepo);

module.exports = {
  upload: async (request, response) => {
    try {
      const { title, description, duration, publishedAt, podcastId } =
        request.body;

      const episode = await service.create({
        title,
        description,
        duration: parseInt(duration),
        publishedAt: new Date(publishedAt),
        audioPath: request.file.path,
        podcast: { id: parseInt(podcastId) },
      });

      response.status(201).json(episode);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  listByPodcast: async (request, response) => {
    const episodes = await service.listByPodcast(request.params.podcastId);

    response.json(episodes);
  },
};
