import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginServiceService {
  baseUrl="https://kaala-api.herokuapp.com";
  constructor(private httpclient:HttpClient) { }

  userAuthentication(userName, password) {
    var data = "email=" + userName + "&password=" + password;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.httpclient.post(this.baseUrl+"/login" , data, { headers: reqHeader });
  }


}
