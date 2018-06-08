import { Component, OnInit, ViewChild } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-expenses-component',
  templateUrl: './expenses-component.component.html',
  styleUrls: ['./expenses-component.component.css']
})
export class ExpensesComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
    dataSource;
    displayedCoulumns=['name','username','email'];
  constructor(private userService:UserService) { }

  onRowClicked(row) {
    
}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filterValue = filterValue;
}

  ngOnInit() {
    this.userService.getUser().subscribe(results=>{
      if(!results){
        return;
      }
      this.dataSource=new MatTableDataSource(results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

}
