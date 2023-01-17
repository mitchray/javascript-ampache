import { UID } from "../base";

export type LiveStream = {
    id: UID,
    name: string,
    url: string,
    codec: string,
    catalog: UID,
    site_url: string,
}