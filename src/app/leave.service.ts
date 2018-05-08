import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'

@Injectable()
export class LeaveService {

  constructor(private http:HttpClient) {}
  baseUrl="https://kaala-api.herokuapp.com";

  getMyleaves(){
    var data = "";
    var x=JSON.parse(localStorage.getItem('Tokens'));
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Authorization':x[0]});
    return this.http.post(this.baseUrl+"/login" , data, { headers: reqHeader });
  }
  
}
