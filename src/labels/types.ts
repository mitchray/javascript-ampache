import { UID } from "../base";

export type LabelResponse = {
  id: UID;
  name: string;
  artists: number;
  summary: string | null;
  external_link: string | null;
  address: string | null;
  category: string | null;
  email: string | null;
  website: string | null;
  user: UID;
};

export type LabelsResponse = {
  total_count: number;
  md5: string;
  label: LabelResponse[];
};
