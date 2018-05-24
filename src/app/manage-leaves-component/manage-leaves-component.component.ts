import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-leaves-component',
  templateUrl: './manage-leaves-component.component.html',
  styleUrls: ['./manage-leaves-component.component.css']
})
export class ManageLeavesComponentComponent implements OnInit {
  datasource = [];
  abc = [];
  constructor(private leaveService: LeaveService) { }

  ngOnInit() {
    debugger;
    this.leaveService.getTypeLeaves().subscribe(data => {
      if (!data) {
        return;
      }
      this.datasource = data.leave_types;
      console.log(this.datasource);
    });

  }
  getData(id) {
    debugger;
    this.abc = this.datasource.filter(x => x.id == id);
  }
  addLeaveRecord(LeaveTypes, noOfdays, validity, carryforward) {
    this.leaveService.addLeaves(LeaveTypes, noOfdays, validity, carryforward).subscribe(data => {
      if (!data) {
        return;
      }
    });
  }

}
