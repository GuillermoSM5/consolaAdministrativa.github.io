import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { LoaderServiceService } from '../loader-service/loader-service.service';
  
  
  @Injectable()
  export class LoaderInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];
  
    constructor(private _loaderService: LoaderServiceService) {}
  
    removeRequest(req: HttpRequest<any>): void {
      const i = this.requests.indexOf(req);
      if (i >= 0) {
        this.requests.splice(i, 1);
      }
      this._loaderService.isLoading.next(this.requests.length > 0);
    }
  
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      this.requests.push(request);
      this._loaderService.isLoading.next(this.requests.length > 0);
      return new Observable((observer) => {
        const subscription = next.handle(request).subscribe(
          (event) => {
            if (event instanceof HttpResponse) {
              this.removeRequest(request);
              observer.next(event);
            }
          },
          (err) => {
            this.removeRequest(request);
            observer.error(err);
          },
          () => {
            this.removeRequest(request);
            observer.complete();
          }
        );
        return () => {
          this.removeRequest(request);
          subscription.unsubscribe();
        };
      });
    }
  }
  