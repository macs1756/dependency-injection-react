import { TYPES } from "@configs/di-types.config";
import { PERSONEL_SERVER_URL } from "@con/server";
import { inject, injectable } from "inversify";
import { HttpService } from "services/http";

@injectable()
export class PersonelService {
  private readonly httpService: HttpService;
  public users: unknown;

  constructor(@inject(TYPES.HttpService) httpService: HttpService) {
    this.httpService = httpService;
    this.users = [];
  }

  public async getPersonelUsers() {
    try {
      const response = await this.httpService.request({
        endpoint: PERSONEL_SERVER_URL,
        method: "GET",
      });

      this.users = response;

      return this.users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
}
