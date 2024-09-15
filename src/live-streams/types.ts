import { UID } from "../base";

export type LiveStreamResponse = {
    id: UID,
    name: string,
    url: string,
    codec: string,
    catalog: UID,
    site_url: string,
}

export type LiveStreamsResponse = {
    total_count: number;
    md5: string;
    live_stream: LiveStreamResponse[];
}