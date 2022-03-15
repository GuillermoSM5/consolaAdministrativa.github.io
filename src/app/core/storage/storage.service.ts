import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/Interfaces/Response/login.interface';
import { LoginService } from 'src/app/core/login-service/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _sessionRef = 'consolaAdministrativa';

  constructor(private loginService: LoginService, private router: Router) {}

  setSession(session: LoginResponse): void {
    localStorage.setItem(this._sessionRef, JSON.stringify(session));
  }

  getSession(): LoginResponse | undefined {
    const session = localStorage.getItem(this._sessionRef) || undefined;
    if (!session) {
      return undefined;
    }
    return JSON.parse(session) as LoginResponse;
  }

  async closeSession(unauthorized = false): Promise<void> {
    const session = this.getSession();
    if (session && !unauthorized) {
      await this.loginService.logout({
        userId: session.userId,
      });
    }
    localStorage.removeItem(this._sessionRef);
    this.router.navigate(['/home']);
  }
}
