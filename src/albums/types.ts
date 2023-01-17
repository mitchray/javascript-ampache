import { UID } from '../base';
import { GenreSummary } from "../genres/types";
import { ArtistSummary } from "../artists/types";
import { Song } from "../songs/types";

export type AlbumSummary = {
    id: UID,
    name: string,
    prefix: string | null,
    basename: string,
}

export type Album = {
    id: UID,
    name: string,
    prefix: string | null,
    basename: string,
    artist: ArtistSummary,
    time: number,
    year: number | string,
    tracks?: Song[],
    songcount: number,
    disccount: number,
    type: string | null,
    genre: GenreSummary[],
    art: string,
    flag: boolean,
    rating: number | null,
    averagerating: number | null,
    mbid: string | null
}