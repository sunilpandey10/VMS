import { Component, OnInit, Input } from '@angular/core';
import { LeaveService} from '../leave.service'
import{ Observable } from 'rxjs/Observable';
import{LeaveTypes} from '../models/myLeavesType'
import { MatSelect } from '@angular/material';
import {Leaves} from '../models/leaveEnum'
import {FormControl} from '@angular/forms';
import { GetType } from '../models/type'

@Component({
  selector: 'app-applyleavemodal-component',
  templateUrl: './applyleavemodal-component.component.html',
  styleUrls: ['./applyleavemodal-component.component.css']
})
export class ApplyleavemodalComponentComponent implements OnInit {
  leavesType:any[];
  desc:any;
  noOfdays:number;
  toDate:Date;
  fromDate:Date;
  status:number=0;
  //selectedValueLeavetype:object={};
  startDate:any;
  endDate:any;

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
  constructor(private leaveService : LeaveService) { 
    this.startDate = new FormControl(new Date());
    this.endDate=new FormControl();
    this.desc=new FormControl();
    this.desc='';
  }

  ngOnInit() {
    this.leaveService.getTypeLeaves().subscribe((data:GetType)=>{
      if (!data) {
      return;
      }
      this.leavesType = data.types;
    });
  }
  onEventsChange(event){
    this.endDate='';
    switch(event) { 
      case Leaves.ANNUAL: { 
        this.desc='Annual Leave';
         
         break; 
      } 
      case Leaves.MATERNITY: {  
        debugger;  
        this.endDate=new Date();
        // this.endDate.setValue(this.endDate.setHours(4320));
         this.desc="Maternity Leave";
         break; 
      } 
      case Leaves.OPTIONAL: {
         this.desc='Optional Leave'
         break;    
      } 
      case Leaves.OTHERS: {  
         this.desc='Others Leaves';
         break; 
      }  
      case Leaves.PATERNITY: { 
        this.endDate=new Date();
        // this.endDate.setValue(this.endDate.setHours(336));
        this.desc="Paternity Leave";
        break; 
     }  
     case Leaves.SICK: { 
       debugger;
       this.endDate=new Date();
      //  this.endDate.setValue(this.endDate.setHours(24));
      this.desc='Sick Leave'
      break; 
   }  

  }
}

  clickSave(events) {
    // debugger;
    // console.log(this.endDate.value);
    // console.log(this.startDate.value);
    // this.leaveService.applyleaves(this.leavesType,this.desc,this.noOfdays,this.startDate,this.endDate,this.status).subscribe(data=>{
    // console.log(data);
    // });
  }
}
