import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ClientdataService } from '../clientdata.service';

@Component({
  selector: 'app-bookmanage',
  templateUrl: './bookmanage.component.html',
  styleUrls: ['./bookmanage.component.css']
})
export class BookmanageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedCoulumns = ['author', 'name', 'lended_by', 'available_copies','total_copies', 'action'];
  constructor(private clientService:ClientdataService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.clientService.getBooks().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data['books']);
    })

  }

}
