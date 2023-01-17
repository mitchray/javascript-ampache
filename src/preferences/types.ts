import { UID } from "../base";

export type Preference = {
    id: UID,
    name: string,
    level: string,
    description: string,
    value: string,
    type: string,
    category: string,
    subcategory: string | null
}