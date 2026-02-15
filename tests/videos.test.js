import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("Videos", () => {
  it("videos()", async () => {
    const res = { video: [] };
    mockJsonRequest("videos", res);
    const result = await api.videos();
    expect(result).toEqual(res);
  });

  it("video()", async () => {
    const res = { id: "1", title: "A Video" };
    mockJsonRequest("video", res);
    const result = await api.video({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("deletedVideos()", async () => {
    const res = { video: [] };
    mockJsonRequest("deleted_videos", res);
    const result = await api.deletedVideos();
    expect(result).toEqual(res);
  });
});
