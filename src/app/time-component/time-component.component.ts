import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-component',
  templateUrl: './time-component.component.html',
  styleUrls: ['./time-component.component.css']
})
export class TimeComponentComponent implements OnInit {
  getDAteMondaytoFriday = [];
  days = [];
  constructor() { }
  ngOnInit() {
    this.getDateOfWeek();
  }

  getDateOfWeek() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var current = new Date();

    var dayOfWeekStartingSundayZeroIndexBased = current.getDay(); // 0 : Sunday ,1 : Monday,2,3,4,5,6 : Saturday  
    var mondayOfWeek = new Date(current.getFullYear(), current.getMonth(), current.getDate() - current.getDay() + 1);
    var sundayOfWeek = new Date(current.getFullYear(), current.getMonth(), current.getDate() - current.getDay() + 7);
    for (var i = 1; i <= 7; i++) {
      var days = mondayOfWeek.getDate() + i;
      this.getDAteMondaytoFriday.push(days + '-' + month[current.getMonth()]);
    }
  }

  onAddTimesheetProjectClick() {
    
  }
}
