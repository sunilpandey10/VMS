import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { user } from './models/user.modal'
import{ Observable } from 'rxjs/Observable'

@Injectable()
export class UserService {
private baseUrl='https://vmsapi.herokuapp.com/v1/auth';
  constructor(private http:HttpClient) { }

  getUser():Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl);
  }
  getSingleUser(id){
      var data = "id=" +id;
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
      return this.http.post<user>(this.baseUrl,data,{headers:reqHeader});
  }
registerEmployee(email,role,empid){
  debugger;
  var data = '{ "email":"'+ email +'","role":"'+role +'","emp_id":"'+empid+'"}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+"/register" , data, { headers: reqHeader });
}

}
