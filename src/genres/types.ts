import { UID } from "../base";

export type GenreSummary = {
    id: UID,
    name: string,
}

export type Genre = {
    id: UID,
    name: string,
    albums: number,
    artists: number,
    songs: number,
    videos: number,
    playlists: number,
    live_streams: number,
}