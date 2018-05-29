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


declare var bootbox: any
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
  success: any;
  error: any = false;
  errormessage:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedCoulumns = ['email', 'leave_type', 'description', 'from_date', 'to_date', 'num_of_days', 'action'];

  constructor(private leaveService: LeaveService) { }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filterValue = filterValue;
  }
  ngOnInit() {
    this.date = new FormControl();
    this.getLeaves();
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
    this.success = false;
    this.status = 1;
    this.num_of_days = this.getBusinessDateCount(this.from_date, this.to_date);
    console.log(this.num_of_days);
    this.leavetype = toInteger(Leaves[this.leave]);
    this.leaveService.updateapplyleaves(this.leavetype, this.description, this.num_of_days, this.getChangeDate(this.from_date), this.getChangeDate(this.to_date), this.status, this.id).subscribe(data => {
      this.success = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(600, 0).slideUp(600, function () {
          $(this).remove();
          $("#saveLeaveModal .close").click()
        });
      }, 1000);
    },(err: any) => {
      debugger;
      this.error=true;
      if(!err.error.message){
        this.errormessage=err.message;
      } else {
      this.errormessage = err.error.message;
      }
      this.error=true;
      window.setTimeout(function() {
        $(".alert").fadeTo(600, 0).slideUp(600, function(){
            $(this).remove(); 
            $("#applyleaveModal .close").click()
        });
    }, 1000);
      
    });
  }
  getChangeDate(dateTobeChange) {
    this.datetobeinFormat = new Date(dateTobeChange);
    this.month = (this.datetobeinFormat.getMonth() < 10 ? '0' : '') + (this.datetobeinFormat.getMonth() + 1);
    return this.datetobeinFormat = this.datetobeinFormat.getFullYear() + "-" + this.month + "-" + this.datetobeinFormat.getDate();
  }
  getBusinessDateCount(startDate, endDate) {
    var elapsed, daysBeforeFirstSaturday, daysAfterLastSunday;
    var ifThen = function (a, b, c) {
      return a == b ? c : a;
    };

    elapsed = endDate - startDate;
    elapsed /= 86400000;

    var daysBeforeFirstSunday = (7 - startDate.getDay()) % 7;
    daysAfterLastSunday = endDate.getDay();

    elapsed -= (daysBeforeFirstSunday + daysAfterLastSunday);
    elapsed = (elapsed / 7) * 5;
    elapsed += ifThen(daysBeforeFirstSunday - 1, -1, 0) + ifThen(daysAfterLastSunday, 6, 5);

    return Math.ceil(elapsed);
  }
  removeLeave(id) {
    var x = confirm("Are you sure you want to delete?");
    if (x) {
      this.leaveService.deleteapplyleaves(id).subscribe(data => {
        this.getLeaves();
        console.log(' Record Deleted');
      });
    }

  }

  getLeaves() {
    this.leaveService.getLeaves().subscribe((results: any) => {
      debugger;
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results.leaves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
}
