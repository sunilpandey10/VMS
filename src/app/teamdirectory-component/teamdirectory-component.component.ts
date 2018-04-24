import { Component, OnInit, ViewChild } from '@angular/core';
import{ Observable } from 'rxjs/observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-teamdirectory-component',
  templateUrl: './teamdirectory-component.component.html',
  styleUrls: ['./teamdirectory-component.component.css']
})

export class TeamdirectoryComponentComponent implements OnInit {
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort:MatSort;
  dataSource;
  displayedCoulumns=['name','username','email'];

  constructor(private userService:UserService) {
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
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
