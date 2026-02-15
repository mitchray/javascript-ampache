import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Albums", () => {
  it("albums()", async () => {
    const res = { album: [{ id: "1", name: "Test" }] };
    mockJsonRequest("albums", res);
    const result = await api.albums();
    expect(result).toEqual(res);
  });

  it("albums() with params", async () => {
    const res = { album: [] };
    mockJsonRequest("albums", res);
    const result = await api.albums({ filter: 123, limit: 10 });
    expect(result).toEqual(res);
  });

  it("album()", async () => {
    const res = { id: "1", name: "An Album" };
    mockJsonRequest("album", res);
    const result = await api.album({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("artistAlbums()", async () => {
    const res = { album: [] };
    mockJsonRequest("artist_albums", res);
    const result = await api.artistAlbums({ filter: 5 });
    expect(result).toEqual(res);
  });

  it("genreAlbums()", async () => {
    const res = { album: [] };
    mockJsonRequest("genre_albums", res);
    const result = await api.genreAlbums({ filter: 2 });
    expect(result).toEqual(res);
  });
});
