import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { user } from './models/user.modal'
import{ Observable } from 'rxjs/Observable'
import { userDetails } from './models/userDetails';
import { Dashboard } from './models/dashboard';

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
registerEmployee(email,role,empid,username,designation){
  debugger;
  var data = '{ "email":"'+ email +'","role":'+role +',"emp_id":'+empid+',"username":"'+username+'","designation":"'+designation+'"}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+"/register" , data, { headers: reqHeader });
}

getManageEmployee():Observable<userDetails>{
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.get<userDetails>(this.baseUrl+"/user/details",{ headers: reqHeader });
}
employeeUpdate(role,id){
  var data = '{ "role":'+ role +'}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.put(this.baseUrl+"/user/details/"+id , data, { headers: reqHeader });
}
disableEmployee(empid,status){
  var data = '{ "is_active":'+ status +'}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.put(this.baseUrl+"/user/details/"+empid , data, { headers: reqHeader });
 }
dashboard():Observable<Dashboard>{
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.get<Dashboard>(this.baseUrl+"/user_dashboard",{ headers: reqHeader });
}
//auth/reset/password 

updatePassword(oldPassword,newPassword,confirmPassword){
  var data = '{ "oldPassword":"'+ oldPassword +'","newPassword":"'+newPassword +'","passwordConfirmation":"'+confirmPassword+'"}';
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+"/reset/password" , data, { headers: reqHeader });
}


}
