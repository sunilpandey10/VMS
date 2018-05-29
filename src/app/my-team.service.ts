import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { Team } from './models/myTeam'
import{ Observable } from 'rxjs/Observable'
import { profile } from './models/profile'

@Injectable()
export class MyTeamService {
  private baseUrl='https://vmsapi.herokuapp.com/v1';

  constructor(private http:HttpClient) { }

  getUser():Observable<Team[]>{
    return this.http.get<Team[]>(this.baseUrl);
  }

  getUsersProfile():Observable<profile>{
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<profile>(this.baseUrl+'/users',{headers: reqHeader});
   }

}
