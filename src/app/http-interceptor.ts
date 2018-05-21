import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        let token = "";
        if (localStorage.getItem('Tokens') != null) {
            token = JSON.parse(localStorage.getItem('Tokens'))[0];
        }
        if (this.router.url == '/login') {
            return next.handle(request);
        }
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(request).catch((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
                switch ((<HttpErrorResponse>error).status) {
                    case 400:
                    // return this.handle400Error(error);
                    case 401:
                    //return this.handle401Error(request, next);
                }
            } else {
                return Observable.throw(error);
            }
        });

    }
    handle400Error() {

    }
    handle401Error(req: HttpRequest<any>, next: HttpHandler) {
        var refreshToken="";
        if (localStorage.getItem('Tokens') != null) {
            refreshToken = JSON.parse(localStorage.getItem('Tokens'))[1];
        }
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        return next.handle(req);
    }
}

