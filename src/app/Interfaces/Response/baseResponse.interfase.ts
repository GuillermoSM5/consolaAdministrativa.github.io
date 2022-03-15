export interface BaseResponse<T> {
  responseCode: number;
  description: string;
  result: T;
}
