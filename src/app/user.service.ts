import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { user } from './models/user.modal'
import{ Observable } from 'rxjs/Observable'
import { userDetails } from './models/userDetails';

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
registerEmployee(email,role,empid,username,isactive){
  debugger;
  var data = '{ "email":"'+ email +'","role":'+role +',"emp_id":'+empid+',"username":"'+username+'","is_active":'+isactive+'}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+"/register" , data, { headers: reqHeader });
}

getManageEmployee():Observable<userDetails>{
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.get<userDetails>(this.baseUrl+"/user/details",{ headers: reqHeader });
}
employeeUpdate(role,id){
  //auth/user/details/<emp_id> 
  debugger;
  var data = '{ "role":'+ role +'}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.put(this.baseUrl+"/user/details/"+id , data, { headers: reqHeader });
}

}
