import { UID } from "../base";

export type PreferenceResponse = {
  id: UID;
  name: string;
  level: string;
  description: string;
  value: string;
  type: string;
  category: string;
  subcategory: string | null;
};

export type PreferencesResponse = {
  total_count: number;
  md5: string;
  preference: PreferenceResponse[];
};
