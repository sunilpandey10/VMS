import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import { LeaveTypes } from './models/myLeavesType';
import { GetType } from './models/type'
import { RequestOptions } from '@angular/http';

@Injectable()
export class LeaveService {

  constructor(private http:HttpClient) {}
  baseUrl="https://vmsapi.herokuapp.com/v1";

  applyleaves(leaveType, desc, noOfdays, fromDate, toDate, status) {
    debugger;
    var data = '{ "leaveType" :  ' + leaveType + ', "description" : "' + desc + '",  "num_of_days" :  ' + noOfdays + ', "from_date" : "' + fromDate + '","to_date" : "' + toDate + '", "leave_status" : ' + status + '  }';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.baseUrl + "/leaves", data, { headers: reqHeader });
  }

  getLeaves() {
    var x = localStorage.getItem('Tokens');
    return this.http.get(this.baseUrl + "/leaves");
  }

  getTypeLeaves():Observable<GetType>{
    debugger;
    return this.http.get<GetType>(this.baseUrl+"/leaveTypes"); 
  } 

  addLeaves(LeaveTypes,noOfdays,validity,carryforward){
    var data="leave_type="+LeaveTypes+"&num_of_days="+noOfdays+"&Validity="+validity+"&carryForward="+carryforward;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/leavesTypes", data, { headers: reqHeader });
    
  }
  updateapplyleaves(leaveType, desc, noOfdays, fromDate, toDate, status,id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    var data = '{ "leaveType" :  ' + leaveType + ', "description" : "' + desc + '", "num_of_days" :  "' + noOfdays + '", "from_date" : "' + fromDate + '", "to_date" : "' + toDate + '","leave_status" : ' + status + ' }';
    return this.http.put(this.baseUrl + "/leaves/"+id, data, { headers: reqHeader });
  }

  deleteapplyleaves(id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(this.baseUrl + "/leaves/"+id, { headers: reqHeader });
  }
}