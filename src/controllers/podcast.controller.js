const PodcastService = require("../services/podcast.service");
const { AppDataSource } = require("../database/data-source");
const podcastRepo = AppDataSource.getRepository("Podcast");
const service = new PodcastService(podcastRepo);

module.exports = {
  create: async (request, response) => {
    try {
      const podcast = await service.create(request.body);

      response.status(201).json(podcast);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },
  list: async (request, response) => {
    const podcasts = await service.list();

    response.json(podcasts);
  },
};
