import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http'


@Injectable()
export class LoginServiceService {
  baseUrl = "https://vmsapi.herokuapp.com/v1/auth";
  constructor(private httpclient: HttpClient) { }

  userAuthentication(userName, password) {
    var data = '{ "email" :  "' + userName + '", "password" : "' + password + '" }';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.post(this.baseUrl + "/login", data, { headers: reqHeader });
  }

  logout() {
    var access_Token = JSON.parse(localStorage.getItem('Tokens'));
    var data = 'Bearer ' + access_Token[0];
    var header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpclient.post(this.baseUrl + "/logout/access", data, { headers: header });
  }
  forgetPassword(email) {
    var data = '{ "email" :  "' + email + '"}';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.put(this.baseUrl + "/forgot/password", data, { headers: reqHeader });
  }

}
