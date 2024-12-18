export interface Imeta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface IResponse<T> {
  data: T[];
  statusCode: number;
  errors: unknown;
}
