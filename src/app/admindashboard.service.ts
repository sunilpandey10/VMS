import { Injectable } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminDetails } from './models/adminDetails';
import { Profiles } from './models/profiles';


@Injectable()
export class AdmindashboardService {
  baseUrl='https://vms-api-new.herokuapp.com/v1';

  constructor(private httpClient:HttpClient) { }
  getemployeesinAdminsec():Observable<AdminDetails>{
    return this.httpClient.get<AdminDetails>(this.baseUrl+"/auth/leave_dashboard"); 
  } 

  UserbyId(id){
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpClient.get(this.baseUrl+"/leaves/"+id, { headers: reqHeader });
  }

  getProfile():Observable<Profiles>{
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpClient.get<Profiles>(this.baseUrl+"/profile",{ headers: reqHeader });
  } 
  updateProfile(username,designation,exp_years,exp_months,gender,skills,client,location,address,mobile,image_url,linked_in,github,slack,dob,bigbucket){

    var data = '{ "username":"' + username + '","designation":"' + designation + '","exp_years":"' + exp_years + '","exp_months":"' + exp_months + '","gender":"' + gender + '","skills":' + skills + ',"client":"' + client + '","location":"' + location + '","address":"' + address + '","mobile":"' + mobile + '","image_url":"' + image_url + '","linked_in":"' + linked_in + '","github":"' + github + '","slack":"' + slack + '","dob":"' + dob + '","bit_bucket":"' + bigbucket + '"}';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.baseUrl + "/profile" , data, { headers: reqHeader });
  }
 

}
