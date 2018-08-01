import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import { LeaveTypes } from './models/myLeavesType';
import { GetType } from './models/type'
import { RequestOptions } from '@angular/http';

@Injectable()
export class LeaveService {

  constructor(private http:HttpClient) {}
  baseUrl="https://vms-api-new.herokuapp.com/v1";

  applyleaves(leaveType, desc, noOfdays, fromDate, toDate, status) {
    var data = '{ "leaveType" :  ' + leaveType + ', "description" : "' + desc + '",  "num_of_days" :  ' + noOfdays + ', "from_date" : "' + fromDate + '","to_date" : "' + toDate + '", "leave_status" : ' + status + '  }';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.baseUrl + "/leaves", data, { headers: reqHeader });
  }

  getLeaves() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.baseUrl + "/leaves",{ headers: reqHeader });
  }

  getTypeLeaves():Observable<GetType>{
    return this.http.get<GetType>(this.baseUrl+"/leaveTypes"); 
  } 

  addLeaves(LeaveTypes,description,noOfdays,validity,carryforward){
    var data = '{ "leaveType" :  "' + LeaveTypes + '", "description" : "' + description + '", "num_of_days" :  ' + noOfdays + ', "validity" : "' + validity + '" , "carry_forward" : ' + carryforward + ' }';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/leaveTypes", data, { headers: reqHeader }); 
  }

  updateapplyleaves(leaveType, desc, noOfdays, fromDate, toDate, status,id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    var data = '{ "leaveType" :  ' + leaveType + ', "description" : "' + desc + '", "num_of_days" :  "' + noOfdays + '", "from_date" : "' + fromDate + '", "to_date" : "' + toDate + '","leave_status" : ' + status + ' }';
    return this.http.put(this.baseUrl + "/leaves/"+id, data, { headers: reqHeader });
  }

  updaleavesTypes(id,LeaveTypes,description,noOfdays,validity,carryforward) {

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    var data = '{ "leaveType" :  "' + LeaveTypes + '", "description" : "' + description + '", "num_of_days" :  ' + noOfdays + ', "validity" : "' + validity + '" , "carry_forward" : "' + carryforward + '" }';
    return this.http.put(this.baseUrl + "/leaveTypes/"+id, data, { headers: reqHeader });
  }

  deleteLeavesType(id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(this.baseUrl + "/leaveTypes/"+id, { headers: reqHeader });
  }

  deleteapplyleaves(id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(this.baseUrl + "/leaves/"+id, { headers: reqHeader });
  }

  manageLeaveEdit(leavetypeid){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.put(this.baseUrl + "/leaveTypes/"+leavetypeid, { headers: reqHeader });

  }
  rejectleaves(id){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.put(this.baseUrl + "/leaves/"+id, { headers: reqHeader });

  }
}