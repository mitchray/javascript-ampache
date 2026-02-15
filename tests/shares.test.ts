import { createApi, mockJsonRequest } from "./helpers";

const api = createApi();

describe("Shares", () => {
  it("shares()", async () => {
    const res = { share: [] };
    mockJsonRequest("shares", res);
    const result = await api.shares();
    expect(result).toEqual(res);
  });

  it("share()", async () => {
    const res = { id: "1", object_type: "song" };
    mockJsonRequest("share", res);
    const result = await api.share({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("shareCreate()", async () => {
    const res = { id: "1", url: "https://..." };
    mockJsonRequest("share_create", res);
    const result = await api.shareCreate({
      filter: 1,
      type: "song",
    });
    expect(result).toEqual(res);
  });

  it("shareEdit()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("share_edit", res);
    const result = await api.shareEdit({ filter: 1, description: "Updated" });
    expect(result).toEqual(res);
  });

  it("shareDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("share_delete", res);
    const result = await api.shareDelete({ filter: 1 });
    expect(result).toEqual(res);
  });
});
