import { Component, OnInit, Input } from '@angular/core';
import { LeaveService } from '../leave.service'
import { Observable } from 'rxjs/Observable';
import { LeaveTypes } from '../models/myLeavesType'
import { MatSelect, MatTableDataSource } from '@angular/material';
import { Leaves } from '../models/leaveEnum'
import { FormControl, Validators } from '@angular/forms';
import { GetType  } from '../models/type';

declare var $:any;

@Component({
  selector: 'app-applyleavemodal-component',
  templateUrl: './applyleavemodal-component.component.html',
  styleUrls: ['./applyleavemodal-component.component.css']
})

export class ApplyleavemodalComponentComponent implements OnInit {
  leavesTypeDatasource: any[];
  desc: any;
  noOfdays: number;
  toDate: Date;
  fromDate: Date;
  status: number = 0;
  startDate: any;
  endDate: any;
  leaveType:any;
  dataSource=[];
  flag:any=false;
  datetobeinFormat:any;
  month:any;

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
  constructor(private leaveService: LeaveService) 
  {
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.desc = new FormControl('', [Validators.required]);
    this.desc = '';
    
  }
 
  startDateMessage(){
    return this.startDate.hasError('required') ? 'Start Date is Required' :'';
  }
  endDateMessage(){
    return this.endDate.hasError('required') ? 'End Date is Required' :'';
  }
  descMessage(){
    return this.desc.hasError('required') ? 'Description Required' :'';
  }

  ngOnInit() {
    this.leaveService.getTypeLeaves().subscribe((data: GetType) => {
      if (!data) {
        return;
      }
      //this.leavesTypeDatasource = data.leave_types;
      this.leavesTypeDatasource=data.leave_types;
    });
  }
  onEventsChange(event) {
    debugger;
    this.leaveType=event;
    switch (event) {
      case Leaves.ANNUAL: {
        this.desc = 'Annual Leave';
        break;
      }
      case Leaves.MATERNITY: {
        this.desc = "Maternity Leave";
        break;
      }
  
      case Leaves.PATERNITY: {
        this.desc = "Paternity Leave";
        break;
      }
      case Leaves.SICK: {
        this.desc = 'Sick Leave'
        break;
      }
    }
  }

  clickSave() {
    debugger;
    this.flag='';
    var stDate=this.getChangeDate(this.startDate);
    var eDate=this.getChangeDate(this.endDate)
    this.noOfdays = this.getBusinessDateCount(this.startDate,this.endDate)
    this.leaveService.applyleaves(this.leaveType, this.desc, this.noOfdays, stDate, eDate, this.status).subscribe(data => {
      this.flag=true;
      window.setTimeout(function() {
        $(".alert").fadeTo(1000, 0).slideUp(1000, function(){
            $(this).remove(); 
            $("#applyleaveModal .close").click()
        });
    }, 5000);
    });
  }
  getChangeDate(dateTobeChange) {
    debugger;
    this.datetobeinFormat = new Date(dateTobeChange);
    this.month = (this.datetobeinFormat.getMonth() < 10 ? '0' : '') + (this.datetobeinFormat.getMonth() + 1);
    return this.datetobeinFormat = this.datetobeinFormat.getFullYear() + "-" + this.month + "-" + this.datetobeinFormat.getDate();
  }
  getBusinessDateCount (startDate, endDate) {
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
  closeModal(){
    debugger;
    $('#applyleaveModal').on('click',function(e){
     e.preventDefault();
    });
    this.desc='';
    this.startDate='';
    this.endDate='';
    this.leaveType='';
  }

}
