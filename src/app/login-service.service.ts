import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginServiceService {
  serviceUrl="https://kaala-api.herokuapp.com/login";
  constructor(private httpclient:HttpClient) { }

  userAuthentication(userName, password) {
    var data = "email=" + userName + "&password=" + password;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True'});
    console.log(reqHeader);
    return this.httpclient.post(this.serviceUrl , data, { headers: reqHeader });
  }


}
