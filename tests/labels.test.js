import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Labels", () => {
  it("labels()", async () => {
    const res = { label: [] };
    mockJsonRequest("labels", res);
    const result = await api.labels();
    expect(result).toEqual(res);
  });

  it("label()", async () => {
    const res = { id: "1", name: "A Label" };
    mockJsonRequest("label", res);
    const result = await api.label({ filter: 1 });
    expect(result).toEqual(res);
  });
});
