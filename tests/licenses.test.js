import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Licenses", () => {
  it("licenses()", async () => {
    const res = { license: [] };
    mockJsonRequest("licenses", res);
    const result = await api.licenses();
    expect(result).toEqual(res);
  });

  it("license()", async () => {
    const res = { id: "1", name: "CC BY" };
    mockJsonRequest("license", res);
    const result = await api.license({ filter: 1 });
    expect(result).toEqual(res);
  });
});
