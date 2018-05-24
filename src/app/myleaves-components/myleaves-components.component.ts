import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { LeaveService } from '../leave.service';
import { GetType } from '../models/type';
import { MatTableModule } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { saveDataSource } from '../models/saveLeavebind'
import { debug } from 'util';
import { Leaves } from '../models/leaveEnum'
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-myleaves-components',
  templateUrl: './myleaves-components.component.html',
  styleUrls: ['./myleaves-components.component.css']
})
export class MyleavesComponentsComponent implements OnInit, saveDataSource {
  id: string;
  saveDataSource = [];
  leavesTypeDatasource = [];
  description: any;
  num_of_days: any;
  from_date: any;
  to_date: any;
  date: any;
  leave: any;
  status: any;
  datetobeinFormat: any;
  month: any;
  leavetype: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedCoulumns = ['leave_type', 'description', 'from_date', 'to_date', 'num_of_days', 'action'];

  constructor(private leaveService: LeaveService) { }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filterValue = filterValue;
  }
  ngOnInit() {
    this.date = new FormControl();
    this.leaveService.getLeaves().subscribe((results: any) => {
      debugger;
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results.leaves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.leaveService.getTypeLeaves().subscribe((data: GetType) => {
      if (!data) {
        return;
      }
      this.leavesTypeDatasource = data.leave_types;
    });
  }
  getData(id) {
    this.saveDataSource = this.dataSource.filteredData.find(x => x.id == id);
    this.from_date = new Date(this.dataSource.filteredData.find(x => x.id == id).from_date);
    this.to_date = new Date(this.dataSource.filteredData.find(x => x.id == id).to_date);
    this.description = this.dataSource.filteredData.find(x => x.id == id).description;
    this.leave = this.dataSource.filteredData.find(x => x.id == id).leave_type;
    this.id = this.dataSource.filteredData.find(x => x.id == id).id;
  }
  clickSave() {
    this.status = 1;
    this.num_of_days = 2;
    this.leavetype = toInteger(Leaves[this.leave]);
    this.leaveService.updateapplyleaves(this.leavetype, this.description, this.num_of_days, this.getChangeDate(this.from_date), this.getChangeDate(this.to_date), this.status, this.id).subscribe(data => {

    });
  }
  getChangeDate(dateTobeChange) {
    this.datetobeinFormat = new Date(dateTobeChange);
    this.month = (this.datetobeinFormat.getMonth() < 10 ? '0' : '') + this.datetobeinFormat.getMonth()
    return this.datetobeinFormat = this.datetobeinFormat.getFullYear() + "-" + this.month + "-" + this.datetobeinFormat.getDate();
  }
  removeLeave(id) {
    debugger;
    this.leaveService.deleteapplyleaves(id).subscribe(data => {
    console.log(' Record Deleted');
    });
  }

  calculateDays() {

  }
}
