import { UID } from "../base";

export type LicenseResponse = {
  id: UID;
  name: string;
  description: string;
  external_link: string;
};

export type LicensesResponse = {
  total_count: number;
  md5: string;
  license: LicenseResponse[];
};
