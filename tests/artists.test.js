import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Artists", () => {
  it("artists()", async () => {
    const res = { artist: [{ id: "1", name: "Artist" }] };
    mockJsonRequest("artists", res);
    const result = await api.artists();
    expect(result).toEqual(res);
  });

  it("artists() with params", async () => {
    const res = { artist: [] };
    mockJsonRequest("artists", res);
    const result = await api.artists({ filter: "test", limit: 5 });
    expect(result).toEqual(res);
  });

  it("artist()", async () => {
    const res = { id: "1", name: "An Artist" };
    mockJsonRequest("artist", res);
    const result = await api.artist({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("genreArtists()", async () => {
    const res = { artist: [] };
    mockJsonRequest("genre_artists", res);
    const result = await api.genreArtists({ filter: 3 });
    expect(result).toEqual(res);
  });

  it("labelArtists()", async () => {
    const res = { artist: [] };
    mockJsonRequest("label_artists", res);
    const result = await api.labelArtists({ filter: 1 });
    expect(result).toEqual(res);
  });
});
