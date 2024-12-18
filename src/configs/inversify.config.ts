import { Container } from "inversify";
import { HttpService } from "../services/http";
import { TYPES } from "./di-types.config";
import { PersonelService } from "@services/personel";
import { PersonelStore } from "@stores/personel";
import { IResponse } from "types";
import { Ipersonel } from "@services/personel/interfaces/index.interface";

const container = new Container({
  defaultScope: "Singleton",
});

container.bind<HttpService>(TYPES.HttpService).to(HttpService);
container
  .bind<PersonelService<IResponse<Ipersonel>>>(TYPES.PersonelService)
  .to(PersonelService);

container
  .bind<PersonelStore<IResponse<Ipersonel>>>(TYPES.PersonelStore)
  .to(PersonelStore);

export { container };
