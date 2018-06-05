import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-leave-modal',
  templateUrl: './admin-leave-modal.component.html',
  styleUrls: ['./admin-leave-modal.component.css']
})
export class AdminLeaveModalComponent implements OnInit {
  dataSource;
  displayedCoulumns=[];
  constructor() { }

  ngOnInit() {
  }

}
