import { Component, OnInit, Input } from '@angular/core';
import { LeaveService } from '../leave.service'
import { Observable } from 'rxjs/Observable';
import { LeaveTypes } from '../models/myLeavesType'
import { MatSelect, MatTableDataSource } from '@angular/material';
import { Leaves } from '../models/leaveEnum'
import { FormControl, Validators } from '@angular/forms';
import { GetType  } from '../models/type';
import { Router } from '@angular/router';


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
  errormessage:string;
  error:any;
  selected:any

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
  constructor(private leaveService: LeaveService,
  private route:Router) 
  {
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.desc = new FormControl('', [Validators.required]);
    this.selected = new FormControl('', [Validators.required]);
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
      this.leavesTypeDatasource=data.leave_types;
    });
  }
  onEventsChange(event) {
    this.leaveType=event;
    switch (event) {
      case Leaves.Annual: {
        this.desc = 'Annual Leave';
        break;
      }
  
      case Leaves.Optional: {
        this.desc = "Optional Leave";
        break;
      }
      case Leaves.Sick: {
        this.desc = 'Sick Leave'
        break;
      }
    }
  }

  clickSave() {
    this.flag='';
    this.error=false;
    var stDate=this.getChangeDate(this.startDate);
    var eDate=this.getChangeDate(this.endDate)
    this.leaveService.applyleaves(this.leaveType, this.desc, this.selected, stDate, eDate, this.status).subscribe(data => {
      this.flag=true;
      window.setTimeout(function() {
        $(".alert").fadeTo(600, 0).slideUp(600, function(){
            $(this).remove(); 
            $("#applyleaveModal .close").click()
        });
    }, 1000);
    location.reload();
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
            $("#applyleaveModal .close").click()
        });
    }, 1000);
    });
//this.route.navigateByUrl('/home/dashboard', {skipLocationChange: true});//.then(()=>
//this.route.navigate(["/home/dashboard"]));
    // this.route.navigateByUrl('/home/calendar', { skipLocationChange: true });
     this.route.navigate(["/home/dashboard"]);
  }
  getChangeDate(dateTobeChange) {
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
    $('#applyleaveModal').on('click',function(e){
     e.preventDefault();
    });
    this.desc='';
    this.startDate='';
    this.endDate='';
    this.leaveType='';
  }

}
