import { createApi, mockJsonRequest } from "./helpers";

const api = createApi();

describe("Podcasts", () => {
  it("podcasts()", async () => {
    const res = { podcast: [] };
    mockJsonRequest("podcasts", res);
    const result = await api.podcasts();
    expect(result).toEqual(res);
  });

  it("podcast()", async () => {
    const res = { id: "1", name: "Show" };
    mockJsonRequest("podcast", res);
    const result = await api.podcast({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("podcastCreate()", async () => {
    const res = { id: "1" };
    mockJsonRequest("podcast_create", res);
    const result = await api.podcastCreate({
      url: "https://example.com/feed.rss",
      catalog: 1,
    });
    expect(result).toEqual(res);
  });

  it("podcastEdit()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("podcast_edit", res);
    const result = await api.podcastEdit({ filter: 1, title: "New Title" });
    expect(result).toEqual(res);
  });

  it("podcastDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("podcast_delete", res);
    const result = await api.podcastDelete({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("podcastEpisodes()", async () => {
    const res = { podcast_episode: [] };
    mockJsonRequest("podcast_episodes", res);
    const result = await api.podcastEpisodes({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("podcastEpisode()", async () => {
    const res = { id: "1" };
    mockJsonRequest("podcast_episode", res);
    const result = await api.podcastEpisode({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("podcastEpisodeDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("podcast_episode_delete", res);
    const result = await api.podcastEpisodeDelete({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("updatePodcast()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("update_podcast", res);
    const result = await api.updatePodcast({ id: 1 });
    expect(result).toEqual(res);
  });

  it("deletedPodcastEpisodes()", async () => {
    const res = { podcast_episode: [] };
    mockJsonRequest("deleted_podcast_episodes", res);
    const result = await api.deletedPodcastEpisodes();
    expect(result).toEqual(res);
  });
});
