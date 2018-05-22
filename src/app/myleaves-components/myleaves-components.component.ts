import { Component, OnInit,ViewChild } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { LeaveService } from '../leave.service';
import { GetType } from '../models/type';
import {MatTableModule} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {saveDataSource} from '../models/saveLeavebind'
import { debug } from 'util';

@Component({
  selector: 'app-myleaves-components',
  templateUrl: './myleaves-components.component.html',
  styleUrls: ['./myleaves-components.component.css']
})
export class MyleavesComponentsComponent implements OnInit, saveDataSource { 
  id :string;
  saveDataSource=[];
  leavesTypeDatasource=[];
  description:any;
  num_of_days:any;
  from_date:any;
  to_date:any;
  date:any;
  leave:any;
  status:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
    dataSource;
    displayedCoulumns=['leave_type','description','from_date','to_date','num_of_days','action'];
    
 constructor(private leaveService:LeaveService) { }
 public loading$ = this.leaveService.getLeaves(1);

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filterValue = filterValue;
}
  ngOnInit() {
    this.date=new FormControl();
    this.leaveService.getLeaves(1).subscribe((results:any)=>{
      if(!results){
        return;
      }
      this.dataSource=new MatTableDataSource(results.Aways);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    });
    this.leaveService.getTypeLeaves().subscribe((data: GetType) => {
      if (!data) {
        return;
      }
      this.leavesTypeDatasource = data.types;
    });
  }
  getData(id){
    debugger;
  this.saveDataSource=this.dataSource.filteredData.find(x=>x.id==id);
  this.from_date=new Date(this.dataSource.filteredData.find(x=>x.id==id).from_date);
  this.to_date=new Date(this.dataSource.filteredData.find(x=>x.id==id).to_date);
  this.description=this.dataSource.filteredData.find(x=>x.id==id).description;
  this.leave=this.dataSource.filteredData.find(x=>x.id==id).leave_type;
  } 
  clickSave(){

  }
}
