import { UID } from "../base";

export type Playlist = {
    id: UID,
    name: string,
    owner: string,
    items: number,
    type: 'public' | 'private',
    art: string,
    has_art: boolean,
    flag: boolean,
    rating: number | null,
    averagerating: number | null,
}