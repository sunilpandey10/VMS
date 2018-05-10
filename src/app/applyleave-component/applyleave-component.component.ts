import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import{LeaveService} from '../leave.service'
import{LeaveTypes} from '../models/myLeavesType'
import { MatSelect } from '@angular/material';



@Component({
  selector: 'app-applyleave-component',
  templateUrl: './applyleave-component.component.html',
  styleUrls: ['./applyleave-component.component.css']
})
export class ApplyleaveComponentComponent implements OnInit {

  leavesType: any;
  desc:string;
  noOfdays:number;
  toDate:Date;
  fromDate:Date;
  status:number=0;



  constructor(private leaveService : LeaveService) { }

  ngOnInit() {


    // this.leavesType = [
    //   {leave_type: 'Dog', sound: 'Woof!'},
    //   {leave_type: 'Cat', sound: 'Meow!'},
    //   {leave_type: 'Cow', sound: 'Moo!'},
    //   {leave_type: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    // ];
    this.leaveService.getTypeLeaves().subscribe(data=>{
      debugger;
      if (!data) {
        console.log(data);
        this.leavesType =data;
      }
    });
  }

  onSubmit() {
    this.leaveService.getUpdateleaves(this.leavesType,this.desc,this.noOfdays,this.toDate,this.fromDate,this.status).subscribe(data=>{
    console.log(data);
    });
  }
}
