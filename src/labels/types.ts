import { UID } from "../base";

export type Label = {
    id: UID,
    name: string,
    artists: number,
    summary: string | null,
    external_link: string | null,
    address: string | null,
    category: string | null,
    email: string | null,
    website: string | null,
    user: UID,
}