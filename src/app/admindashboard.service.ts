import { Injectable } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminDetails } from './models/adminDetails';
import { Profiles } from './models/profiles';


@Injectable()
export class AdmindashboardService {
  baseUrl='https://vmsapi.herokuapp.com/v1';

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

}
