class PodcastService {
  constructor(repository) {
    this.repo = repository;
  }

  async create(data) {
    return await this.repo.save(data);
  }

  async list() {
    return await this.repo.find({ relations: ["episodes"] });
  }
}

module.exports = PodcastService;
