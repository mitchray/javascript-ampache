import { UID } from "../base";
import { GenreSummary } from "../genres/types";

export type Video = {
    id: UID,
    title: string,
    mime: string,
    resolution: string,
    size: number,
    genre: GenreSummary[],
    time: number,
    url: string,
    art: string,
    flag: boolean,
    rating: number | null,
    averagerating: number | null,
    playcount: number,
}

export type DeletedVideo = {
    id: UID,
    addition_time: number,
    delete_time: number,
    title: string,
    file: string,
    catalog: UID,
    total_count: number,
    total_skip: number,
}