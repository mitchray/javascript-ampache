import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Songs", () => {
  it("songs()", async () => {
    const res = { song: [] };
    mockJsonRequest("songs", res);
    const result = await api.songs();
    expect(result).toEqual(res);
  });

  it("song()", async () => {
    const res = { id: "1", title: "A Song" };
    mockJsonRequest("song", res);
    const result = await api.song({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("artistSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("artist_songs", res);
    const result = await api.artistSongs({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("albumSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("album_songs", res);
    const result = await api.albumSongs({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("genreSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("genre_songs", res);
    const result = await api.genreSongs({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("playlistSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("playlist_songs", res);
    const result = await api.playlistSongs({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("smartlistSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("smartlist_songs", res);
    const result = await api.smartlistSongs({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("licenseSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("license_songs", res);
    const result = await api.licenseSongs({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("songDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("song_delete", res);
    const result = await api.songDelete({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("songTags()", async () => {
    const res = { tag: [] };
    mockJsonRequest("song_tags", res);
    const result = await api.songTags({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("getLyrics()", async () => {
    const res = { object_id: "1", object_type: "song", plugin: [] };
    mockJsonRequest("get_lyrics", res);
    const result = await api.getLyrics({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("urlToSong()", async () => {
    const res = { id: "1" };
    mockJsonRequest("url_to_song", res);
    const result = await api.urlToSong({
      url: "https://ampache.test/server/play/index.php?song=1",
    });
    expect(result).toEqual(res);
  });

  it("urlToSong() with filter param (7.9.0+)", async () => {
    const res = { id: "1" };
    mockJsonRequest("url_to_song", res);
    const result = await api.urlToSong({
      filter: "https://ampache.test/server/play/index.php?song=1",
    });
    expect(result).toEqual(res);
  });

  it("searchSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("search_songs", res);
    const result = await api.searchSongs({ filter: "test" });
    expect(result).toEqual(res);
  });

  it("deletedSongs()", async () => {
    const res = { song: [] };
    mockJsonRequest("deleted_songs", res);
    const result = await api.deletedSongs();
    expect(result).toEqual(res);
  });
});
