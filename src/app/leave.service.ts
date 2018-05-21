import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import { LeaveTypes } from './models/myLeavesType';
import { GetType } from './models/type'

@Injectable()
export class LeaveService {

  constructor(private http:HttpClient) {}
  baseUrl="https://kaala-api.herokuapp.com";

  applyleaves(leaveType, desc, noOfdays, fromDate, toDate, status) {
    debugger;
    var data = "leave_type=" + leaveType + "&description=" + desc + "&num_of_days=" + noOfdays + "&from_date=" + fromDate + "&to_date=" + toDate + "&status=" + status;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl + "/leaves", data, { headers: reqHeader });
  }

  getLeaves(id) {
    var x = JSON.parse(localStorage.getItem('Tokens'));
    return this.http.get(this.baseUrl + "/leaves/" + id);
  }

  getTypeLeaves():Observable<GetType>{
    return this.http.get<GetType>(this.baseUrl+"/leaves/getTypes"); 
  } 

  addLeaves(LeaveTypes,noOfdays,validity,carryforward){
    var data="leave_type="+LeaveTypes+"&num_of_days="+noOfdays+"&Validity="+validity+"&carryForward="+carryforward;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl + "/leaves/addTypes", data, { headers: reqHeader });
    
  }
}