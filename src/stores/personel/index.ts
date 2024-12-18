import { injectable, inject } from "inversify";
import { makeAutoObservable } from "mobx";
import { PersonelService } from "@services/personel";
import { TYPES } from "@configs/di-types.config";
import { IResponse } from "types";

@injectable()
export class PersonelStore<T> {
  private personelService: PersonelService<T>;
  public personelUsers: IResponse<T>;

  constructor(
    @inject(TYPES.PersonelService) personelService: PersonelService<T>
  ) {
    this.personelService = personelService;
    makeAutoObservable(this);
    this.personelUsers = {
      data: [],
      errors: null,
      statusCode: 400,
    };
  }

  public async fetchPersonelUsers(): Promise<IResponse<T>> {
    try {
      this.personelUsers = await this.personelService.getPersonelUsers();
    } catch (error) {
      console.error("Failed to fetch personel users:", error);
    }
    return this.personelUsers;
  }
}
