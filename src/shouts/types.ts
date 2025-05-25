import { UID } from "../base";
import { UserSummary } from "../users/types";

export type ShoutResponse = {
  id: UID;
  date: number;
  text: string;
  user: UserSummary;
  object_type: "song" | "album" | "artist" | "playlist";
  object_id: UID;
};
