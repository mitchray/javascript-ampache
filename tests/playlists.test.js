import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Playlists", () => {
  it("playlists()", async () => {
    const res = { playlist: [] };
    mockJsonRequest("playlists", res);
    const result = await api.playlists();
    expect(result).toEqual(res);
  });

  it("smartlists()", async () => {
    const res = {
      playlist: [{ id: "smart_1", name: "Smart" }],
    };
    mockJsonRequest("smartlists", res);
    const result = await api.smartlists();
    expect(result.playlist).toHaveLength(1);
    expect(result.playlist[0].id).toBe("smart_1");
  });

  it("playlist()", async () => {
    const res = { id: "1", name: "My List" };
    mockJsonRequest("playlist", res);
    const result = await api.playlist({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("smartlist()", async () => {
    const res = { id: "smart_1", name: "My Smart" };
    mockJsonRequest("smartlist", res);
    const result = await api.smartlist({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("userPlaylists()", async () => {
    const res = { playlist: [] };
    mockJsonRequest("user_playlists", res);
    const result = await api.userPlaylists();
    expect(result).toEqual(res);
  });

  it("userSmartlists()", async () => {
    const res = { playlist: [] };
    mockJsonRequest("user_smartlists", res);
    const result = await api.userSmartlists();
    expect(result).toEqual(res);
  });

  it("playlistCreate()", async () => {
    const res = { id: "1", name: "New" };
    mockJsonRequest("playlist_create", res);
    const result = await api.playlistCreate({ name: "New" });
    expect(result).toEqual(res);
  });

  it("playlistAdd()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("playlist_add", res);
    const result = await api.playlistAdd({
      filter: 1,
      id: 5,
      type: "song",
    });
    expect(result).toEqual(res);
  });

  it("playlistEdit()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("playlist_edit", res);
    const result = await api.playlistEdit({ filter: 1, name: "Updated" });
    expect(result).toEqual(res);
  });

  it("playlistDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("playlist_delete", res);
    const result = await api.playlistDelete({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("smartlistDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("smartlist_delete", res);
    const result = await api.smartlistDelete({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("playlistAddSong()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("playlist_add_song", res);
    const result = await api.playlistAddSong({ filter: 1, song: 10 });
    expect(result).toEqual(res);
  });

  it("playlistRemoveSong()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("playlist_remove_song", res);
    const result = await api.playlistRemoveSong({ filter: 1, track: 1 });
    expect(result).toEqual(res);
  });

  it("playlistGenerate()", async () => {
    const res = { song: [] };
    mockJsonRequest("playlist_generate", res);
    const result = await api.playlistGenerate({ mode: "random" });
    expect(result).toEqual(res);
  });

  it("playlistHash()", async () => {
    const res = { md5: "abc123" };
    mockJsonRequest("playlist_hash", res);
    const result = await api.playlistHash({ filter: 1 });
    expect(result).toEqual(res);
  });
});
