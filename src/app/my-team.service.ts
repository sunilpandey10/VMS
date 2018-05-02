import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Team } from './models/myTeam'
import{ Observable } from 'rxjs/Observable'

@Injectable()
export class MyTeamService {
  private serviceUrl='https://reqres.in/api/users';

  constructor(private http:HttpClient) { }

  getUser():Observable<Team[]>{
    return this.http.get<Team[]>(this.serviceUrl);
  }

}
