import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class CalenderServiceService {

  private baseUrl = 'https://vms-api-new.herokuapp.com/v1';

  constructor(private http: HttpClient) { }

  getCalenderEvents(){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(this.baseUrl + '/calendar_events' , { headers: reqHeader });
  }

}
