const EpisodeService = require("../services/episode.service");
const { AppDataSource } = require("../database/data-source");
const episodeRepo = AppDataSource.getRepository("Episode");
const service = new EpisodeService(episodeRepo);

module.exports = {
  upload: async (request, response) => {
    try {
      const { title, description, duration, publishedAt, podcastId } =
        request.body;

      const audioFile = request.files["audio"]?.[0];
      const coverFile = request.files["cover"]?.[0];

      if (!audioFile)
        return res.status(400).json({ message: "Audio file is required." });

      const episode = await service.create({
        title,
        description,
        duration: parseInt(duration),
        publishedAt: new Date(publishedAt),
        audioPath: audioFile.path,
        coverImagePath: coverFile?.path ?? null,
        podcast: { id: parseInt(podcastId) },
        createdBy: { id: request.user.id },
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
