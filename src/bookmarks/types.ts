import { UID } from "../base";

export type Bookmark = {
    id: UID,
    type: 'song' | 'video' | 'podcast_episode',
    position: number,
    client?: string,
    date?: number,
}