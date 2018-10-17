// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {

    const authReq = request.clone({
      headers: new HttpHeaders()
          .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      });

    // send the newly created request
    return next.handle(authReq)
    .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log(' Error Occurred ');
        console.log(error);
        // return the error to the method that called it
        return Observable.throw(error);
    }) as any;
    // return next.handle(request);
  }

}







