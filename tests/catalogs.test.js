import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Catalogs", () => {
  it("catalogs()", async () => {
    const res = { catalog: [] };
    mockJsonRequest("catalogs", res);
    const result = await api.catalogs();
    expect(result).toEqual(res);
  });

  it("catalog()", async () => {
    const res = { id: "1", name: "Music" };
    mockJsonRequest("catalog", res);
    const result = await api.catalog({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("catalogAction()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("catalog_action", res);
    const result = await api.catalogAction({
      task: "add_to_catalog",
      catalog: 1,
    });
    expect(result).toEqual(res);
  });

  it("catalogFile()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("catalog_file", res);
    const result = await api.catalogFile({
      file: "/path/to/file",
      task: "add",
      catalog: 1,
    });
    expect(result).toEqual(res);
  });

  it("catalogAdd()", async () => {
    const res = { id: "1" };
    mockJsonRequest("catalog_add", res);
    const result = await api.catalogAdd({
      name: "New Catalog",
      path: "/music",
    });
    expect(result).toEqual(res);
  });

  it("catalogDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("catalog_delete", res);
    const result = await api.catalogDelete({ filter: 1 });
    expect(result).toEqual(res);
  });
});
