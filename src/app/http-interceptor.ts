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
            token = localStorage.getItem('Tokens');
        }
        if (this.router.url == '/login' || request.url == 'https://hooks.slack.com/services/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') {
            return next.handle(request);
        }
        else {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(request).catch((error: Response) => {       
                    return Observable.throw(error);               
            });
        }
    }

}

