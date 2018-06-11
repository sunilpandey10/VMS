import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Team } from './models/myTeam'
import { Observable } from 'rxjs/Observable'
import { Profiles } from './models/profiles'
import { LeaveTrack } from './models/leaveTrack';

@Injectable()
export class MyTeamService {
  private baseUrl = 'https://vms-api-new.herokuapp.com/v1';

  constructor(private http: HttpClient) { }

  getUser(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl);
  }

  getUsersProfile(): Observable<Profiles> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Profiles>(this.baseUrl + '/users', { headers: reqHeader });
  }

  loggedInUserProfile(id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/users/' + id, { headers: reqHeader });
  }

  trackUserLeave(): Observable<LeaveTrack> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<LeaveTrack>(this.baseUrl + '/leaves/track', { headers: reqHeader });
  }
  getadminDashboard() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + "/auth/count/dashboard", { headers: reqHeader });
  }
}
