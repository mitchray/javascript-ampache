import { createApi, mockJsonRequest } from "./helpers.js";

const api = createApi();

describe("LiveStreams", () => {
  it("liveStreams()", async () => {
    const res = { live_stream: [] };
    mockJsonRequest("live_streams", res);
    const result = await api.liveStreams();
    expect(result).toEqual(res);
  });

  it("liveStream()", async () => {
    const res = { id: "1", name: "Station" };
    mockJsonRequest("live_stream", res);
    const result = await api.liveStream({ filter: 1 });
    expect(result).toEqual(res);
  });

  it("liveStreamCreate()", async () => {
    const res = { id: "1" };
    mockJsonRequest("live_stream_create", res);
    const result = await api.liveStreamCreate({
      name: "Radio",
      url: "https://stream.example.com",
      codec: "mp3",
      catalog: "1",
    });
    expect(result).toEqual(res);
  });

  it("liveStreamEdit()", async () => {
    const res = { id: "1" };
    mockJsonRequest("live_stream_edit", res);
    const result = await api.liveStreamEdit({ filter: "1", name: "New Name" });
    expect(result).toEqual(res);
  });

  it("liveStreamDelete()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("live_stream_delete", res);
    const result = await api.liveStreamDelete({ filter: "1" });
    expect(result).toEqual(res);
  });
});
