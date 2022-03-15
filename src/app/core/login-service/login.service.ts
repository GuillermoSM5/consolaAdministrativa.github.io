import { Injectable } from '@angular/core';
import { LoginReq } from '../../Interfaces/Request/LoginReq.interface';
import { BaseServiceService } from '../base-service/base-service.service';
import { LoginResponse } from '../../Interfaces/Response/login.interface';
import { LogOutReq } from 'src/app/Interfaces/Request/LogOutReq.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseService: BaseServiceService) { }

  login(request:LoginReq){
    return this.baseService.post<LoginResponse, LoginReq>('/session/login',request)
  }

  logout(request: LogOutReq): Promise<any> {
    return this.baseService.post('/session/logout', request);
  }
}
