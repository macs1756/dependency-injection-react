export interface IhttpServiceProps {
  method: "GET" | "POST" | "PUT";
  body?: unknown;
  endpoint: string;
}
