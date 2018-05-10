import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import { LeaveTypes } from './models/myLeavesType';
import {GetType} from './models/leaveEnum'

@Injectable()
export class LeaveService {

  constructor(private http:HttpClient) {}
  baseUrl="https://kaala-api.herokuapp.com";

   getUpdateleaves(leaveType,desc,noOfdays,fromDate,toDate,status){
   
    var data = "leave_type"+leaveType+"&description"+desc+"&num_of_days"+noOfdays+"&from_date"+fromDate+"&to_date"+toDate+"&status"+status;
    var x=JSON.parse(localStorage.getItem('Tokens'));
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Authorization':x[0]});
    return this.http.post(this.baseUrl+"/leaves" , data, { headers: reqHeader });
  }

  getLeaves(id){
    
    var x=JSON.parse(localStorage.getItem('Tokens'));
    var reqleaveHeader = new HttpHeaders({'Authorization':'Bearer '+x[0]});
    return this.http.get(this.baseUrl+"/leaves/"+id,{headers: reqleaveHeader}); 
  }

  getTypeLeaves():Observable<GetType>{
    var x=JSON.parse(localStorage.getItem('Tokens'));
    var reqHeader1 = new HttpHeaders({'Authorization':'Bearer '+x[0]});
    return this.http.get<GetType>(this.baseUrl+"/leaves/getTypes",{headers: reqHeader1}); 
  } 
}