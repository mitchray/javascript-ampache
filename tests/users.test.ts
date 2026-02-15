import { createApi, mockJsonRequest } from "./helpers";

const api = createApi();

describe("Users", () => {
  it("users()", async () => {
    const res = { user: [{ id: "1", username: "admin" }] };
    mockJsonRequest("users", res);
    const result = await api.users();
    expect(result).toEqual(res);
  });

  it("user()", async () => {
    const res = { id: "1", username: "test" };
    mockJsonRequest("user", res);
    const result = await api.user();
    expect(result).toEqual(res);
  });

  it("userCreate()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("user_create", res);
    const result = await api.userCreate({
      username: "newuser",
      password: "hash",
      email: "u@example.com",
    });
    expect(result).toEqual(res);
  });

  it("register()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("register", res);
    const result = await api.register({
      username: "newuser",
      password: "hash",
      email: "u@example.com",
    });
    expect(result).toEqual(res);
  });

  it("userUpdate()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("user_update", res);
    const result = await api.userUpdate({
      username: "user",
      email: "new@example.com",
    });
    expect(result).toEqual(res);
  });

  it("userDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("user_delete", res);
    const result = await api.userDelete({ filter: "1" });
    expect(result).toEqual(res);
  });

  it("following()", async () => {
    const res = { user: [] };
    mockJsonRequest("following", res);
    const result = await api.following({ username: "someone" });
    expect(result).toEqual(res);
  });

  it("toggleFollow()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("toggle_follow", res);
    const result = await api.toggleFollow({ username: "someone" });
    expect(result).toEqual(res);
  });

  it("timeline()", async () => {
    const res = { activity: [] };
    mockJsonRequest("timeline", res);
    const result = await api.timeline({ username: "someone" });
    expect(result).toEqual(res);
  });

  it("friendsTimeline()", async () => {
    const res = { activity: [] };
    mockJsonRequest("friends_timeline", res);
    const result = await api.friendsTimeline();
    expect(result).toEqual(res);
  });
});
