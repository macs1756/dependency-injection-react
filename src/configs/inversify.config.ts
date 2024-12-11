import { Container } from "inversify";
import { HttpService } from "../services/http";
import { TYPES } from "./di-types.config";
import { PersonelService } from "@services/personel";

const container = new Container({
  defaultScope: "Singleton",
});

container.bind<HttpService>(TYPES.HttpService).to(HttpService);
container.bind<PersonelService>(TYPES.PersonelService).to(PersonelService);

export { container };
