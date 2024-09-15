import { UID } from "../base";

export type UserSummary = {
  id: UID;
  username: string;
};

export type UserResponse = {
  id: UID;
  username: string;
  auth: string;
  email: string;
  access: number;
  streamtoken: string | null;
  fullname_public: number;
  validation: string | null;
  disabled: boolean;
  create_date: number;
  last_seen: number;
  website: string | null;
  state: string | null;
  city: string | null;
};

export type UsersResponse = {
  total_count: number;
  md5: string;
  user: UserResponse[];
};

export type ActivityResponse = {
  id: UID;
  date: number;
  object_type: string;
  object_id: UID;
  action: string;
  user: UserSummary;
};
