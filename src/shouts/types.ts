import { UID } from "../base";
import { UserSummary } from "../users/types";

export type Shout = {
    id: UID,
    date: number,
    text: string,
    user: UserSummary,
}