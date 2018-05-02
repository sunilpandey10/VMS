import { Component, OnInit, ViewChild } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { MyTeamService } from '../my-team.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-teamdirectory-component',
  templateUrl: './teamdirectory-component.component.html',
  styleUrls: ['./teamdirectory-component.component.css']
})

export class TeamdirectoryComponentComponent implements OnInit {
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort:MatSort;
  dataSource;
  displayedCoulumns=['firstname','lastname','avtar'];

  constructor(private teamService:MyTeamService) {
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
    this.teamService.getUser().subscribe(results=>{
      let res=results["data"];
      if(!results){
        return;
      }
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

}
