import { UID } from "../base";

export type Share = {
    id: UID,
    name: string,
    owner: string,
    allow_stream: boolean,
    allow_download: boolean,
    creation_date: number,
    lastvisit_date: number,
    object_type: string,
    object_id: UID,
    expire_days: number,
    max_counter: number,
    counter: number,
    secret: string,
    public_url: string,
    description: string,
}