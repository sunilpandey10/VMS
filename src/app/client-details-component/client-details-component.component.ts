import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientdataService } from '../clientdata.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-client-details-component',
  templateUrl: './client-details-component.component.html',
  styleUrls: ['./client-details-component.component.css']
})
export class ClientDetailsComponentComponent implements OnInit {
  dataSource;
  displayedCoulumns = ['sno', 'client', 'subteam', 'domain', 'people', 'actions'];
  getSingleRecord: any;
  client: any;
  subteam: any;
  domain: any;
  people: any;
  location: any;
  id: any;
  searchModel: any;
  sortedData: any[];
  isSucess: any;
  isError: any;
  message: any;
  addclient: any;
  addteam: any;
  adddomain: any;
  addpeople: any;
  addlocation: any;
  isPass:any;
  error:any;



  constructor(private clientService: ClientdataService, private confirmationService: ConfirmationService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {

    this.getClients();
  }

  editClient(id) {
    this.getSingleRecord = this.dataSource.filter(x => x.id == id);
    this.id = id;
    this.client = this.getSingleRecord[0].client;
    this.subteam = this.getSingleRecord[0].team;
    this.domain = this.getSingleRecord[0].domain;
    this.people = this.getSingleRecord[0].people;
    this.location = this.getSingleRecord[0].location;
  }
  updateClient() {
    this.isError = false;
    this.isSucess = false;
    this.clientService.updateClient(this.id, this.client, this.subteam, this.domain, this.people, this.location).subscribe(data => {
      this.isSucess = true;
      this.getClients();
      this.setTimeOutModal('#editClientModal .close');
    }, (error => {
      this.isError = true;
      if (!error.error.message) {
        this.message = error.message;
      } else {
        this.message = error.error.message;
      }
      this.isError = true;
      this.setTimeOutModal('#editClientModal .close');
    }));
  }

  addClients() {
    this.error = false;
    this.isPass = false;
    this.clientService.addClient(this.addclient, this.addteam, this.adddomain, this.addpeople, this.addlocation).subscribe(data => {
      this.getClients();
      this.isPass = true;
      this.setTimeOutModal('#addClientModal .close');
    },
      (error => {
        this.error = true;
        if (!error.error.message) {
          this.message = error.message;
        } else {
          this.message = error.error.message;
        }
        this.error = true;
        this.setTimeOutModal('#addClientModal .close');
      })
    );
  }
  setTimeOutModal(classname:string) {
    window.setTimeout(function () {
      $(".alert").fadeTo(600, 0).slideUp(600, function () {
        $(this).remove();
        $(classname).click()
      });
    }, 1000);
  }
  
  deleteClient(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.clientService.deleteClient(id).subscribe(data => {
          this.getClients();
        })
      }
    });
  }
  getClients() {
    
    this.clientService.getClient().subscribe(data => {
      if (!data) {
        return;
      }
      debugger;
      console.log(data)
      this.sortedData = data['clients'];
      this.dataSource = data['clients'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  valuechange(name: any) {
    if (name.length > 0) {
      this.dataSource = new MatTableDataSource(this.sortedData.filter(data => (data.team.toLowerCase().indexOf(name.toLowerCase()) === 0) || data.people.toLowerCase().indexOf(name.toLowerCase()) === 0));
      
    }
    else {
      this.dataSource = new MatTableDataSource(this.sortedData);
      
    }
 
  }

}
