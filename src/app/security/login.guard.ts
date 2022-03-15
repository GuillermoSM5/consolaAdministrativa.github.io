import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../core/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
  canActivate(): boolean {
    const session = this.storageService.getSession();
    if (session) {
      this.router.navigate(['/consola']);
    }
    return !session;
  }
}
