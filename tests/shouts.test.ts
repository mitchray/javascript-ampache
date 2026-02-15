import { createApi, mockJsonRequest } from "./helpers";

const api = createApi();

describe("Shouts", () => {
  it("last_shouts()", async () => {
    const res = { shout: [] };
    mockJsonRequest("last_shouts", res);
    const result = await api.last_shouts();
    expect(result).toEqual(res);
  });

  it("last_shouts() with params", async () => {
    const res = { shout: [{ id: "1" }] };
    mockJsonRequest("last_shouts", res);
    const result = await api.last_shouts({ username: "user", limit: 5 });
    expect(result).toEqual(res);
  });
});
