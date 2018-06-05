import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-bookmanage',
  templateUrl: './bookmanage.component.html',
  styleUrls: ['./bookmanage.component.css']
})
export class BookmanageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedCoulumns = ['empid', 'name', 'email', 'role', 'action'];
  constructor() { }

  ngOnInit() {
  }

}
