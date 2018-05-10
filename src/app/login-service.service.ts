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

  logout(){
    var access_Token=JSON.parse(localStorage.getItem('Tokens'));
    var data ='Bearer '+ access_Token[0];
    console.log(data);
    var header=new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.httpclient.post(this.baseUrl+"/logout/access" , data, { headers: header });
  }
 refreshToken(){
  var refresh_Token=JSON.parse(localStorage.getItem('Tokens'));
  var data ='Bearer '+ refresh_Token[1];
  console.log(data);
  var header=new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  return this.httpclient.post(this.baseUrl+"/token/refresh" , data, { headers: header });
}

}
