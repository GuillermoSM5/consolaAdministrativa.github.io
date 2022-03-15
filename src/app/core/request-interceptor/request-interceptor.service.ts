import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { AlertService } from '../alert/alert.service';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private alertService: AlertService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const session = this.storageService.getSession();
    let headers: HttpHeaders = new HttpHeaders({});
    if (session?.jwt) {
      headers = new HttpHeaders({
        Authorization: `Bearer ${session?.jwt}` || '',
      });
    }

    const reqClone = request.clone({
      headers,
    });

    return next.handle(reqClone).pipe(
      tap((res) => {
        if (res instanceof HttpResponse && session?.jwt) {
          const newtkn = res.headers.get('Authorization');
          session.jwt = newtkn || session.jwt || '';
          this.storageService.setSession(session);
        }
        if (res instanceof HttpResponse && res.body.responseCode === 1) {
          this.catchIntercept({
            handle: true,
            message: res.body.description,
          });
        }
        return res;
      }),
      catchError((err) => this.catchIntercept(err))
    );
  }

  catchIntercept(error: any): Observable<any> {
    if (error instanceof HttpErrorResponse) {
      this.alertService.error(
        error.status === 401
          ? error.error.description ||
              'Tu sesión llevaba mucho tiempo inactiva. Por seguridad, la hemos cerrado.'
          : 'Hubo un error inesperado, intente más tarde'
      );
      if (error.status === 401) this.storageService.closeSession(true);
      if (error.status === 404) console.log(error.message);
    }
    if (error.handle) {
      this.alertService.error(
        error.message || 'Hubo un error inesperado, intente más tarde'
      );
    }

    return throwError(error);
  }
}
