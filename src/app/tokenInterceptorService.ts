import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization:
          "Bearer BQAaXypZ8cmtVGkiZFtz0iFZThEhmTOmB-WVClH5ew_m784zguW-hMvdnvj3lc6W2K0s_a014B-x2okBrIiSOvFEvKHnfXB3Ov0-blCM3HZJ3CcOPwNeCTF-L9Js2MrZf5GZgafBnrRwT-XGOVApqrNlJeWf92w_fQ"
      }
    });
    return next.handle(tokenizedReq);
  }
}
