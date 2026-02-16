import { createApi, mockJsonRequest, mockBinaryRequest } from "./helpers.js";

const api = createApi();

describe("System", () => {
  it("systemUpdate()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("system_update", res);
    const result = await api.systemUpdate();
    expect(result).toEqual(res);
  });

  it("getIndexes() with type song", async () => {
    const res = { song: [] };
    mockJsonRequest("get_indexes", res);
    const result = await api.getIndexes({ type: "song" });
    expect(result).toEqual(res);
  });

  it("getIndexes() with invalid type returns false", () => {
    const result = api.getIndexes({ type: "invalid" });
    expect(result).toBe(false);
  });

  it("list()", async () => {
    const res = { list: [] };
    mockJsonRequest("list", res);
    const result = await api.list({ type: "song" });
    expect(result).toEqual(res);
  });

  it("index()", async () => {
    const res = { index: [] };
    mockJsonRequest("index", res);
    const result = await api.index({ type: "song" });
    expect(result).toEqual(res);
  });

  it("browse()", async () => {
    const res = { browse: [] };
    mockJsonRequest("browse", res);
    const result = await api.browse({});
    expect(result).toEqual(res);
  });

  it("getSimilar() with type song", async () => {
    const res = { song: [] };
    mockJsonRequest("get_similar", res);
    const result = await api.getSimilar({ type: "song", filter: 1 });
    expect(result).toEqual(res);
  });

  it("stats() with type song", async () => {
    const res = { song: [] };
    mockJsonRequest("stats", res);
    const result = await api.stats({ type: "song" });
    expect(result).toEqual(res);
  });

  it("stats() with invalid type returns false", () => {
    const result = api.stats({ type: "invalid" });
    expect(result).toBe(false);
  });

  it("rate()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("rate", res);
    const result = await api.rate({ type: "song", id: 1, rating: 5 });
    expect(result).toEqual(res);
  });

  it("flag()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("flag", res);
    const result = await api.flag({ type: "song", id: 1, flag: 1 });
    expect(result).toEqual(res);
  });

  it("recordPlay()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("record_play", res);
    const result = await api.recordPlay({ id: 1 });
    expect(result).toEqual(res);
  });

  it("scrobble()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("scrobble", res);
    const result = await api.scrobble({
      song: "Song",
      artist: "Artist",
      album: "Album",
    });
    expect(result).toEqual(res);
  });

  it("updateFromTags()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("update_from_tags", res);
    const result = await api.updateFromTags({ type: "song", id: 1 });
    expect(result).toEqual(res);
  });

  it("updateArtistInfo()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("update_artist_info", res);
    const result = await api.updateArtistInfo({ id: 1 });
    expect(result).toEqual(res);
  });

  it("updateArt()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("update_art", res);
    const result = await api.updateArt({ type: "song", id: 1 });
    expect(result).toEqual(res);
  });

  it("stream()", async () => {
    mockBinaryRequest("stream", Buffer.from("binary"));
    const result = await api.stream({ id: 1, type: "song" });
    expect(result).toBeDefined();
    expect(result.constructor.name).toBe("Blob");
  });

  it("download()", async () => {
    mockBinaryRequest("download", Buffer.from("data"));
    const result = await api.download({ id: 1, type: "song" });
    expect(result).toBeDefined();
    expect(result.constructor.name).toBe("Blob");
  });

  it("getArt()", async () => {
    mockBinaryRequest("get_art", Buffer.from("image"));
    const result = await api.getArt({ id: 1, type: "album" });
    expect(result).toBeDefined();
    expect(result.constructor.name).toBe("Blob");
  });

  it("localplay()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("localplay", res);
    const result = await api.localplay({ command: "next" });
    expect(result).toEqual(res);
  });

  it("localplaySongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("localplay_songs", res);
    const result = await api.localplaySongs();
    expect(result).toEqual(res);
  });

  it("democratic()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("democratic", res);
    const result = await api.democratic({ method: "vote", oid: 1 });
    expect(result).toEqual(res);
  });

  it("nowPlaying()", async () => {
    const res = { now_playing: [] };
    mockJsonRequest("now_playing", res);
    const result = await api.nowPlaying();
    expect(result).toEqual(res);
  });

  it("player()", async () => {
    const res = { player: [] };
    mockJsonRequest("player", res);
    const result = await api.player({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("getExternalMetadata()", async () => {
    const res = { object_id: "1", object_type: "song", plugin: [] };
    mockJsonRequest("get_external_metadata", res);
    const result = await api.getExternalMetadata({ filter: 1, type: "song" });
    expect(result).toEqual(res);
  });

  it("searchRules()", async () => {
    const res = { rule: [] };
    mockJsonRequest("search_rules", res);
    const result = await api.searchRules({ filter: "song" });
    expect(result).toEqual(res);
  });

  it("advancedSearch() with type song", async () => {
    const res = { song: [] };
    mockJsonRequest("advanced_search", res);
    const result = await api.advancedSearch({
      type: "song",
      operator: "and",
      rules: [["title", "0", "test"]],
    });
    expect(result).toEqual(res);
  });

  it("advancedSearch() with invalid type returns false", () => {
    const result = api.advancedSearch({
      type: "invalid",
      operator: "and",
      rules: [["title", "0", "test"]],
    });
    expect(result).toBe(false);
  });

  it("searchGroup()", async () => {
    const res = { search: { song: [], album: [], artist: [] } };
    mockJsonRequest("search_group", res);
    const result = await api.searchGroup({
      operator: "and",
      rules: [["title", "0", "test"]],
    });
    expect(result).toEqual(res);
  });

  it("advancedSearch is callable", () => {
    expect(typeof api.advancedSearch).toBe("function");
  });

  it("search() alias returns same result as advancedSearch()", async () => {
    const res = { song: [] };
    mockJsonRequest("advanced_search", res);
    const result = await api.search({
      type: "song",
      operator: "and",
      rules: [["title", "0", "test"]],
    });
    expect(result).toEqual(res);
  });
});
