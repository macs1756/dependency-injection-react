import { IpersonelDirtyResponse } from "../interfaces/index.interface";

export function responseAdapter<T>(d: IpersonelDirtyResponse): T[] {

  const arr = d.data.map((e) => ({
    id: e.id,
    name: e.attributes.fullName,
  })) as T[];

  return arr;
}
