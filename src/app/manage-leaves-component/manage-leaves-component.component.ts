import { Component, OnInit } from '@angular/core';
import {LeaveService } from '../leave.service'
import{ Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-leaves-component',
  templateUrl: './manage-leaves-component.component.html',
  styleUrls: ['./manage-leaves-component.component.css']
})
export class ManageLeavesComponentComponent implements OnInit {
datasource=[];
  constructor(private leaveService : LeaveService) { }

  ngOnInit() {
    this.leaveService.getTypeLeaves().subscribe(data => {
      if (!data) {
        return;
      }
     this.datasource=data.types;
     console.log(this.datasource)
    })
  }

}
