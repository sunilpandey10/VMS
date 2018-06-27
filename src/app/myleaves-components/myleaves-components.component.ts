import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { LeaveService } from '../leave.service';
import { GetType } from '../models/type';
import { MatTableModule } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { saveDataSource } from '../models/saveLeavebind'
import { debug } from 'util';
import { Leaves } from '../models/leaveEnum'
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';


declare var bootbox: any
@Component({
  selector: 'app-myleaves-components',
  templateUrl: './myleaves-components.component.html',
  styleUrls: ['./myleaves-components.component.css'],

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
  errormessage: any;
  selected: any;
  startDate: any;
  endDate: any;
  desc: any;
  leaveType: any;
  flag: any;
  msgs: any;
  mobileDataSource:any;
  successUpdated:any;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() dataSourceP;
  dataSource;
  displayedCoulumns = ['leave_type', 'description', 'from_date', 'to_date', 'num_of_days', 'action'];



  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
  constructor(private leaveService: LeaveService, private confirmationService: ConfirmationService) {
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.desc = new FormControl('', [Validators.required]);
    this.selected = new FormControl('', [Validators.required]);
    this.desc = '';
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filterValue = filterValue;
  }
  startDateMessage() {
    return this.startDate.hasError('required') ? 'Start Date is Required' : '';
  }
  endDateMessage() {
    return this.endDate.hasError('required') ? 'End Date is Required' : '';
  }
  descMessage() {
    return this.desc.hasError('required') ? 'Description Required' : '';
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
    this.selected = this.dataSource.filteredData.find(x => x.id == id).num_of_days;
  }
  clickSubmit() {
    this.success = false;
    this.status = 1;
    this.leavetype = toInteger(Leaves[this.leave]);
    this.leaveService.updateapplyleaves(this.leavetype, this.description, this.selected, this.getChangeDate(this.from_date), this.getChangeDate(this.to_date), this.status, this.id).subscribe(data => {
      this.success = true;
      this.setTimeOutF('#saveLeaveModal .close');
      this.getLeaves();

    }, (err: any) => {

      this.error = true;
      if (!err.error.message) {
        this.errormessage = err.message;
      } else {
        this.errormessage = err.error.message;
      }
      this.setTimeOutF('#applyleaveModal .close');
      this.getLeaves();
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
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.leaveService.deleteapplyleaves(id).subscribe(data => {
          this.getLeaves();
        });
      }
    });

  }
  setTimeOutF(id: string) {
    window.setTimeout(function () {
      $(".alert").fadeTo(600, 0).slideUp(600, function () {
        $(this).remove();
        $(id).click()
      });
    }, 1000);
  }
  clickUpdate(){
    this.status = 0;
    this.flag='';
    this.error=false;
    var stDate=this.startDate;
    var eDate=this.endDate;
    
    this.leaveService.updateapplyleaves(Leaves[this.leave], this.description, this.selected, this.getChangeDate(this.from_date), this.getChangeDate(this.to_date), this.status,this.id).subscribe(data => {
      this.successUpdated = true;
      this.getLeaves();
      window.setTimeout(function() {
        $(".alert").fadeTo(600, 0).slideUp(600, function(){
            $(this).remove(); 
           
        });
    }, 1000);
  
    },(err: any) => {
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
        });
    }, 1000);
    });
  }
  getLeaves() {
    this.leaveService.getLeaves().subscribe((results: any) => {
      if (!results) {
        return;
      }
      this.mobileDataSource=results['leaves'];
      console.log(this.mobileDataSource);
    
      this.dataSource = new MatTableDataSource(results.leaves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  clickSave() {
    this.flag = '';
    this.error = false;
    var stDate = this.getChangeDate(this.startDate);
    var eDate = this.getChangeDate(this.endDate)
    this.leaveService.applyleaves(this.leaveType, this.desc, this.selected, stDate, eDate, this.status).subscribe(data => {
      this.flag = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(600, 0).slideUp(600, function () {
          $(this).remove();
          $("#applyleaveModal .close").click()
        });
      }, 1000);
    }, (err: any) => {
      this.error = true;
      if (!err.error.message) {
        this.errormessage = err.message;
      } else {
        this.errormessage = err.error.message;
      }
      this.error = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(600, 0).slideUp(600, function () {
          $(this).remove();
          $("#applyleaveModal .close").click()
        });
      }, 1000);
    });
  }
}
