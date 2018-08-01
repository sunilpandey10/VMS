import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalenderServiceService } from '../user.calender-service.service';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})
export class CalendarComponentComponent implements OnInit {

  calendarOptions: Options;
  events: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private calenderEvent: CalenderServiceService) { 
   this.getCalEvent();
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2018-09-01'
        },
        {
          title: 'Long Event',
          start: '2018-09-07',
          end: '2018-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-09-11',
          end: '2018-09-13'
          
        },
        {
          title: 'Meeting',
          start: '2018-09-12T10:30:00',
          end: '2018-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-09-28'
        }
      ]
    };
  }

  getCalEvent() {
    this.calenderEvent.getCalenderEvents().subscribe(data => {
      this.events=data['Birthdays'];
    })
  }
  ngOnInit() {

  }

}
