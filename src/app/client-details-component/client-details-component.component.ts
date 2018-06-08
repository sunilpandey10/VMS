import { Component, OnInit } from '@angular/core';
import { ClientdataService } from '../clientdata.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-client-details-component',
  templateUrl: './client-details-component.component.html',
  styleUrls: ['./client-details-component.component.css']
})
export class ClientDetailsComponentComponent implements OnInit {
dataSource;
displayedCoulumns=['sno','client','subteam','domain','people','actions'];
getSingleRecord:any;
client:any;
subteam:any;
domain:any;
people:any;
location:any;
id:any;
searchModel:any;
sortedData: any[];

  constructor(private clientService: ClientdataService) { }

  ngOnInit() {

   this.getClients();
  }

  editClient(id){
  this.getSingleRecord = this.dataSource.filter(x=>x.id==id);
  this.id=id;
  this.client=this.getSingleRecord[0].client;
  this.subteam=this.getSingleRecord[0].team;
  this.domain=this.getSingleRecord[0].domain;
  this.people=this.getSingleRecord[0].people;
  this.location=this.getSingleRecord[0].location; 
  }
  updateClient(){
    this.clientService.updateClient(this.id,this.client,this.subteam,this.domain, this.people,this.location).subscribe(data=>{
    this.getClients();
    });
  }
  deleteClient(id){
    this.clientService.deleteClient(id).subscribe(data=>{
      this.getClients();
    })
  }
  getClients(){
    this.clientService.getClient().subscribe(data => {
      if (!data) {
        return;
      }
      this.sortedData=data['clients'];
     this.dataSource=data['clients'];
    });
  }
  valuechange(name: any) {
debugger;
    if (name.length > 0) {
      this.dataSource = new MatTableDataSource(this.sortedData.filter(data => data.team.toLowerCase().indexOf(name.toLowerCase()) === 0));
    }
    else {
      this.dataSource = new MatTableDataSource(this.sortedData);
    }
  }

}
