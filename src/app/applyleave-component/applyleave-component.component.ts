import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import{LeaveService} from '../leave.service'
import{LeaveTypes} from '../models/myLeavesType'
import { MatSelect } from '@angular/material';
import {Leaves} from '../models/leaveEnum'
import {FormControl} from '@angular/forms';
import { GetType } from '../models/type'




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
    // Prevent Saturday and Sunday from being selected.
    //if()
    debugger;
    console.log(d);
    return day !== 0 && day !== 6;
  }

  constructor(private leaveService : LeaveService) { 
    this.startDate = new FormControl(new Date());
    this.endDate=new FormControl();
    this.desc=new FormControl();
  }

  ngOnInit() {
  
    this.leaveService.getTypeLeaves().subscribe((data:GetType)=>{
      debugger;
      if (!data) {
      return;
      }
      this.leavesType = data.types;
    });
  }
  /* This event help To Reduce Task in apply Leave modal pop up */
  onEventsChange(event){
    debugger;
    switch(event) { 
      case Leaves.ANNUAL: { 
         console.log("ANNUAL"); 
         
         break; 
      } 
      case Leaves.MATERNITY: { 
       // this.endDate =this.startDate.setMonth(6);
         console.log("MATERNITY"); 
         this.desc="MATERNITY Leave";
         break; 
      } 
      case Leaves.OPTIONAL: {
        this.desc="Yeap it is Optional";
         console.log("OPTIONAL"); 
         break;    
      } 
      case Leaves.OTHERS: { 
         console.log("OTHERS"); 
         break; 
      }  
      case Leaves.PATERNITY: { 
        this.desc="PATERNITY Leave";
        console.log("PATERNITY"); 
        break; 
     }  
     case Leaves.SICK: { 
      console.log("SICK"); 
      break; 
   }  

  }
}

addMonth(){

}
  onSubmit() {
    this.leaveService.getUpdateleaves(this.selectedValueLeavetype,this.desc,this.noOfdays,this.fromDate,this.toDate,this.status).subscribe(data=>{
    console.log(data);
    });
  }
}
