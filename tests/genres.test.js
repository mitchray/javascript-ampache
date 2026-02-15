import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Genres", () => {
  it("genres()", async () => {
    const res = { genre: [{ id: "1", name: "Rock" }] };
    mockJsonRequest("genres", res);
    const result = await api.genres();
    expect(result).toEqual(res);
  });

  it("genre()", async () => {
    const res = { id: "1", name: "Jazz" };
    mockJsonRequest("genre", res);
    const result = await api.genre({ filter: 1 });
    expect(result).toEqual(res);
  });
});
