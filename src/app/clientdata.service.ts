import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable'
import { LeaveTypes } from './models/myLeavesType';
import { GetType } from './models/type'
import { RequestOptions } from '@angular/http';

@Injectable()
export class ClientdataService {

  baseUrl="https://vms-api-new.herokuapp.com/v1";
  constructor(private http:HttpClient) { }

  getClient() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.baseUrl + "/clients",{ headers: reqHeader });
  }
  updateClient(id, client,team,domain,people,location){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    var data = '{ "client" :  "' + client + '", "team" : "' + team + '", "domain" :  "' + domain + '", "people" : "' + people + '", "location" : "' + location + '"}';
    return this.http.put(this.baseUrl + "/clients/"+id, data, { headers: reqHeader });
  }
  deleteClient(id){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(this.baseUrl + "/clients/"+id, { headers: reqHeader });
  }

  getBooks(){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.baseUrl + "/books",{ headers: reqHeader });
  }

  addClient(addclient,addteam,adddomain,addpeople,addlocation){
    debugger;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    var data = '{ "client" :  "' + addclient + '", "team" : "' + addteam + '", "domain" :  "' + adddomain + '", "people" : "' + addpeople + '", "location" : "' + addlocation + '"}';
    return this.http.post(this.baseUrl + "/clients", data, { headers: reqHeader });
  }

  createBooks(){
    // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    // var data = '{ "client" :  "' + client + '", "team" : "' + team + '", "domain" :  "' + domain + '", "people" : "' + people + '", "location" : "' + location + '"}';
    // return this.http.post(this.baseUrl + "/clients/", data, { headers: reqHeader });
  }

  updateBook(id){
    // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    // var data = '{ "client" :  "' + client + '", "team" : "' + team + '", "domain" :  "' + domain + '", "people" : "' + people + '", "location" : "' + location + '"}';
    // return this.http.put(this.baseUrl + "/books/"+id, data, { headers: reqHeader });
  }

}
