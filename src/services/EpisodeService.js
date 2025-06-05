class EpisodeService {
  constructor(repo) {
    this.repo = repo;
  }

  async create(data) {
    return await this.repo.save(data);
  }

  async listByPodcast(podcastId) {
    return await this.repo.find({ where: { podcast: { id: podcastId } } });
  }
}

module.exports = EpisodeService;
