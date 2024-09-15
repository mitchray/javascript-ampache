import { UID } from "../base";

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
};

export type PlaylistsResponse = {
  total_count: number;
  md5: string;
  playlist: PlaylistResponse[];
};
