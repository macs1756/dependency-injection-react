import axios, { AxiosInstance } from "axios";
import { IhttpServiceProps } from "./interfaces";

export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const baseURL = import.meta.env.VITE_SERVER_URL;
    const TOKEN = import.meta.env.VITE_SERVER_TOKEN;

    if (!baseURL || !TOKEN) {
      throw new Error("Missing environment variables for baseURL or TOKEN");
    }

    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  }

  public async request(props: IhttpServiceProps) {
    const { method, endpoint, body } = props;

    let data = null;
    let errors = null;
    let statusCode = null;

    try {
      let response;

      if (method === "GET") {
        response = await this.axiosInstance.get(endpoint);
      } else if (method === "POST") {
        response = await this.axiosInstance.post(endpoint, body);
      } else if (method === "PUT") {
        response = await this.axiosInstance.put(endpoint, body);
      }

      data = response?.data;
      statusCode = response?.status;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      errors = error || "An unknown error occurred";
      statusCode = error?.response?.status;
    }

    return {
      data,
      errors,
      statusCode,
    };
  }
}
