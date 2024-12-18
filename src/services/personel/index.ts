import { TYPES } from "@configs/di-types.config";
import { PERSONEL_SERVER_URL } from "@con/server.constants";
import { inject, injectable } from "inversify";
import { HttpService } from "services/http";
import { responseAdapter } from "./adapters/index.adapter";
import { IResponse } from "types";

@injectable()
export class PersonelService<T> {
  private readonly httpService: HttpService;
  public users: {
    data: T[];
    statusCode: number;
    errors: unknown;
  };
  private responseAdapted: T[];

  constructor(@inject(TYPES.HttpService) httpService: HttpService) {
    this.httpService = httpService;
    this.users = {
      data: [],
      statusCode: 400,
      errors: null,
    };
    this.responseAdapted = [];
  }

  public async getPersonelUsers(): Promise<IResponse<T>> {
    try {
      const response = await this.httpService.request({
        endpoint: PERSONEL_SERVER_URL,
        method: "GET",
      });

      this.responseAdapted = responseAdapter<T>(response.data);

      this.users = {
        data: this.responseAdapted,
        errors: null,
        statusCode: response.statusCode,
      };

      return this.users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return this.users;
    }
  }
}
