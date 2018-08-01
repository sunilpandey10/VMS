import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SlackServiceService {

  constructor(private http:HttpClient) { }

  private baseurl='https://hooks.slack.com/services/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';

  postDateSlack(message){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseurl, message ,{ headers: reqHeader });
  }
}
