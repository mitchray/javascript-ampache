import { UID } from "../base";
import { UserSummary } from "../users/types"

export type PlaylistResponse = {
  id: UID;
  name: string;
  owner: string;
  items: number;
  type: "public" | "private";
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averagerating: number | null;
  user: UserSummary;
};

export type PlaylistsResponse = {
  total_count: number;
  md5: string;
  playlist: PlaylistResponse[];
};
