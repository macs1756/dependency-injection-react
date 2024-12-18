import { Imeta } from "types";

export interface IpersonelDirtyResponse {
  data: IpersonelDirty[];
  meta: Imeta;
}

export interface IpersonelDirty {
  id: number;
  attributes: {
    fullName: string;
  };
}

export interface Ipersonel {
  id: number;
  name: string;
}
