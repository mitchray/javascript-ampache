import { UID } from "../base";

export type UserSummary = {
    id: UID,
    username: string,
}

export type User = {
    id: UID,
    username: string,
    auth: string,
    email: string,
    access: number,
    streamtoken: string | null,
    fullname_public: number,
    validation: string | null,
    disabled: boolean,
    create_date: number,
    last_seen: number,
    website: string | null,
    state: string | null,
    city: string | null,
}

export type Activity = {
    id: UID,
    date: number,
    object_type: string,
    object_id: UID,
    action: string,
    user: UserSummary,
}