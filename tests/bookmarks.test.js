import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Bookmarks", () => {
  it("bookmark()", async () => {
    const res = { id: "1", position: 0 };
    mockJsonRequest("bookmark", res);
    const result = await api.bookmark({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("bookmarks()", async () => {
    const res = { bookmark: [] };
    mockJsonRequest("bookmarks", res);
    const result = await api.bookmarks({});
    expect(result).toEqual(res);
  });

  it("getBookmark()", async () => {
    const res = { id: "1" };
    mockJsonRequest("get_bookmark", res);
    const result = await api.getBookmark({ filter: 1, type: "song" });
    expect(result).toEqual(res);
  });

  it("bookmarkCreate()", async () => {
    const res = { id: "1" };
    mockJsonRequest("bookmark_create", res);
    const result = await api.bookmarkCreate({
      filter: 1,
      type: "song",
      position: 120,
    });
    expect(result).toEqual(res);
  });

  it("bookmarkEdit()", async () => {
    const res = { id: "1" };
    mockJsonRequest("bookmark_edit", res);
    const result = await api.bookmarkEdit({
      filter: 1,
      type: "song",
      position: 60,
    });
    expect(result).toEqual(res);
  });

  it("bookmarkDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("bookmark_delete", res);
    const result = await api.bookmarkDelete({ filter: 1, type: "song" });
    expect(result).toEqual(res);
  });
});
