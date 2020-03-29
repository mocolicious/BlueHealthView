import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { first, mergeMap } from 'rxjs/operators';
// import * as AuthReducer from '../reducers/login';
// import { User } from '../models/user';
// import { getUser } from '../reducers/login';

@Injectable()
export class AddTokenHeaderHttpRequestInterceptorInterceptor implements HttpInterceptor {

  constructor(/*private AuthStore: Store<AuthReducer.State>*/) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Consider only adding the auth header to API requests as this will add it to all HTTP requests.
    return this.addToken(request).pipe(
        first(),
        mergeMap((requestWithToken: HttpRequest<any>) => next.handle(requestWithToken))
    );
}

/**
 * Adds the JWT token to the request's header.
 */
private addToken(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    // NOTE: DO NOT try to immediately setup this selector in the constructor or as an assignment in a
    // class member variable as there's no stores available when this interceptor fires fires up and
    // as a result it'll throw a runtime error.
    // return this.AuthStore.pipe(
    //     select(getUser),
    //     first(),
    //     mergeMap((user: User) => {
    //         if (user.accessToken) {
    //             request = request.clone({
    //                 headers: request.headers.set('Authorization', `Bearer ${user.accessToken.token}`)
    //             });
    //             console.log(JSON.stringify(request));
    //         } else {
    //             console.warn(`Invalid token!!! Cannot use token "${user.accessToken}".`);
    //         }
    //         return of(request);
    //     })
    // );
    return;
}
}
