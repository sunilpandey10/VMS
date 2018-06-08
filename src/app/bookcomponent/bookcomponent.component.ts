import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ClientdataService } from '../clientdata.service';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSourceClient;
  displayedCoulumnsClient=['sno','client','subteam','domain','people'];
  dataSource;
  displayedCoulumns = ['author', 'name', 'lended_by', 'available_copies', 'total_copies'];
  constructor(private clientService: ClientdataService) { }

  ngOnInit() {
    this.getBooks();
    this.getClients();
  }
  getBooks() {
    this.clientService.getBooks().subscribe(data => {
      this.dataSource = new MatTableDataSource(data['books']);
    });
  }
  getClients(){
    this.clientService.getClient().subscribe(data => {
      if (!data) {
        return;
      }
     this.dataSourceClient=data['clients'];
    });
  }
}
