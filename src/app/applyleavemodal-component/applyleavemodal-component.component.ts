import { Component, OnInit, Input } from '@angular/core';
import { LeaveService } from '../leave.service'
import { Observable } from 'rxjs/Observable';
import { LeaveTypes } from '../models/myLeavesType'
import { MatSelect, MatTableDataSource } from '@angular/material';
import { Leaves } from '../models/leaveEnum'
import { FormControl } from '@angular/forms';
import { GetType  } from '../models/type'
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

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6 && d >= new Date();
  }
  constructor(private leaveService: LeaveService) {
    this.startDate = new FormControl();
    this.endDate = new FormControl();
    this.desc = new FormControl();
    this.desc = '';
  }

  ngOnInit() {
    this.leaveService.getTypeLeaves().subscribe((data: GetType) => {
      if (!data) {
        return;
      }
      this.leavesTypeDatasource = data.types;
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
      case Leaves.OPTIONAL: {
        this.desc = 'Optional Leave'
        break;
      }
      case Leaves.OTHERS: {
        this.desc = 'Others Leaves';
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

  clickSave(events) {
    debugger;
    this.flag='';
    // var stDate= Date.parse(this.startDate).toString();
    var stDate=this.startDate.toISOString().split('T');
    var eDate=this.endDate.toISOString().split('T');
    this.noOfdays = this.diffDays(this.startDate,this.endDate)
    this.leaveService.applyleaves(this.leaveType, this.desc, this.noOfdays, stDate[0], eDate[0], this.status).subscribe(data => {
      this.flag=true;
      console.log(this.flag);
      window.setTimeout(function() {
        $(".alert").fadeTo(1000, 0).slideUp(1000, function(){
            $(this).remove(); 
            this.flag=false;
            console.log(this.flag);
            $("#applyleaveModal .close").click()
        });
    }, 5000);
     
    });
  }

  diffDays(startDate, endDate) {
    var ONEDAY = 1000 * 60 * 60 * 24;
    var date1_ms = startDate.getTime();
    var date2_ms = endDate.getTime();
    var difference_ms = Math.abs(date1_ms - date2_ms);
    return Math.round(difference_ms/ONEDAY);
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
  // private updateTableData(data: any[]) {
  //   this.dataSource = data && data.length ? new MatTableDataSource(data) : new MatTableDataSource([]);
  // }
}
