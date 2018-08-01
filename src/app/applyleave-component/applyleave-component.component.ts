import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import{LeaveService} from '../leave.service'
import{LeaveTypes} from '../models/myLeavesType'
import { MatSelect } from '@angular/material';
import {Leaves} from '../models/leaveEnum'
import {FormControl} from '@angular/forms';
import { GetType } from '../models/type';





@Component({
  selector: 'app-applyleave-component',
  templateUrl: './applyleave-component.component.html',
  styleUrls: ['./applyleave-component.component.css']
})
export class ApplyleaveComponentComponent implements OnInit {

  leavesType:any[];
  desc:any;
  noOfdays:number;
  toDate:Date;
  fromDate:Date;
  status:number=0;
  selectedValueLeavetype:string;
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
  }

  ngOnInit() {
  
    this.leaveService.getTypeLeaves().subscribe((data:GetType)=>{
      if (!data) {
      return;
      }
      this.leavesType = data.leave_types;
    });
  }
  /* This event help To Reduce Task in apply Leave modal pop up */
  onEventsChange(event){
    switch(event) { 
      case Leaves.Annual: { 
        this.desc="Annual Leave";
         break; 
      } 
  
      case Leaves.Optional: { 
        this.desc="Optional Leave";
        break; 
     }  
     case Leaves.Sick: { 
      this.desc="Sick Leave";
      break; 
   }  

  }
}

addMonth(){

}
  onSubmit() {
    this.leaveService.applyleaves(this.selectedValueLeavetype,this.desc,this.noOfdays,this.fromDate,this.toDate,this.status).subscribe(data=>{
  
    });
  }
}
