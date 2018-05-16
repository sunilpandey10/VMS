import { Component, OnInit,ViewChild } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-myleaves-components',
  templateUrl: './myleaves-components.component.html',
  styleUrls: ['./myleaves-components.component.css']
})
export class MyleavesComponentsComponent implements OnInit {

  id :string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
    dataSource;
    displayedCoulumns=['leave_type','description','from_date','to_date','num_of_days'];
 constructor(private leaveService:LeaveService) { }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filterValue = filterValue;
}
  ngOnInit() {
    this.leaveService.getLeaves(1).subscribe((results:any)=>{
      if(!results){
        return;
      }
      this.dataSource=new MatTableDataSource(results.Aways);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    });
  }
 

}
