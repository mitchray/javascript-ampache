import { UID } from "../base";

export type Podcast = {
    id: UID,
    name: string,
    description: string,
    language: string,
    copyright: string,
    feed_url: string,
    generator: string,
    website: string,
    build_date: string,
    sync_date: string,
    public_url: string,
    art: string,
    flag: boolean,
    rating: number | null,
    averaterating: number | null,
    podcast_episode: PodcastEpisode[]
}

export type PodcastEpisode = {
    id: UID,
    title: string,
    name: string,
    description: string,
    category: string,
    author: string,
    author_full: string,
    website: string,
    pubdate: string,
    state: 'completed' | 'pending'
    filelength: string,
    filesize: string,
    filename: string,
    mime: string,
    time: number,
    size: number,
    public_url: string,
    url: string,
    catalog: UID,
    art: string,
    flag: boolean,
    rating: number | null,
    averagerating: number | null,
    playcount: number,
    played: string,
}

export type DeletedPodcastEpisode = {
    id: UID,
    addition_time: number,
    delete_time: number,
    title: string,
    file: string,
    catalog: UID,
    total_count: number,
    total_skip: number,
    podcast: UID,
}