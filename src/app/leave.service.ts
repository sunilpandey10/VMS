import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import { LeaveTypes } from './models/myLeavesType';

@Injectable()
export class LeaveService {

  constructor(private http:HttpClient) {}
  baseUrl="https://kaala-api.herokuapp.com";

   getUpdateleaves(leaveType,desc,noOfdays,fromDate,toDate,status){
     debugger;
    var data = "leave_type"+leaveType+"&description"+desc+"&num_of_days"+noOfdays+"&from_date"+fromDate+"&to_date"+toDate+"&status"+status;
    var x=JSON.parse(localStorage.getItem('Tokens'));
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Authorization':x[0]});
    return this.http.post(this.baseUrl+"/leaves" , data, { headers: reqHeader });
  }

  getTypeLeaves(){
    debugger;
    var x=JSON.parse(localStorage.getItem('Tokens'));
    var reqHeader1 = new HttpHeaders({'Authorization':'Bearer '+x[0]});
    console.log(reqHeader1.get('Authorization'));
    //return this.http.get(this.baseUrl+"/leaves/getTypes",{ headers: new HttpHeaders().set('Authorization','Bearer '+ x[0])});
    return this.http.get(this.baseUrl+"/leaves/getTypes",{headers: reqHeader1}); 
  } 
}