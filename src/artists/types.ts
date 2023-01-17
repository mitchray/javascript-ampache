import { Album } from "../albums/types";
import { Song } from "../songs/types";
import { Genre } from "../genres/types";

export type ArtistSummary = {
    id: string,
    name: string,
    prefix: string | null,
    basename: string
}

export type Artist = {
    id: string,
    name: string,
    prefix: string | null,
    basename: string,
    albums: Album[],
    albumcount: number,
    songs: Song[],
    songcount: number,
    genre: Genre[],
    art: string,
    flag: boolean,
    rating: number | null,
    averagerating: number | null,
    mbid: string | null,
    summary: string,
    time: number,
    yearformed: number,
    placeformed: string,
}