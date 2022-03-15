import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../../Interfaces/Response/baseResponse.interfase';

@Injectable({
  providedIn: 'root',
})
export class BaseServiceService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string): Promise<BaseResponse<T> | undefined> {
    return this.http.get<BaseResponse<T>>(this.baseUrl + url).toPromise();
  }

  post<T, R>(url: string, request: R): Promise<BaseResponse<T> | void> {
    return this.http
      .post<BaseResponse<T>>(this.baseUrl + url, request)
      .toPromise();
  }
}
