import { Component, OnInit } from '@angular/core';
import { MyTeamService } from '../my-team.service';
import { LeaveTrack } from '../models/leaveTrack';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  trackLeave: any[];
  leaveRemaining: any;
  anuualLeave: any;
  totalLeave: number;
  sickLeave: any;
  data: any;

  public datafor: number[];
  public pieChartLabels: string[] = ['Annual Leave', 'Sick Leave'];
  public pieChartData: number[] = this.trackLeave;

  public pieChartType: string = 'pie';


  pageTitle: string;

  constructor(private myTeamService: MyTeamService) {
    var x;
    debugger;
    this.myTeamService.trackUserLeave().subscribe((data: LeaveTrack) => {
      this.anuualLeave = data.track[0].total_annual_leaves_taken;
      this.totalLeave = data.track[0].total_annual_leaves;
      this.sickLeave = data.track[0].total_sick_leaves;
      x = this.totalLeave + "," + this.anuualLeave + "," + this.sickLeave;
      console.log(x);
      this.datafor = x;

      if (sessionStorage.getItem('val') != null) {
        sessionStorage.removeItem('val');
      }
      sessionStorage.setItem('val', x);
    });

    if (sessionStorage.getItem('val') != null) {
      this.trackLeave = sessionStorage.getItem('val').split(",");

      var totalLabel = 'Total ' + this.trackLeave[0];
      var usedLeave = 'Used ' + this.trackLeave[1];
      var sub = (Number(this.trackLeave[0]) - Number(this.trackLeave[1]));
      var remainingLabel = 'Remaining ' + sub;
      var sickLabel = ' Sick ' + this.trackLeave[2];
      this.data = {
        labels: [totalLabel, usedLeave, remainingLabel, sickLabel],
        datasets: [
          {

            data: [Number(this.trackLeave[0]), Number(this.trackLeave[1]), (Number(this.trackLeave[0]) - Number(this.trackLeave[1])), Number(this.trackLeave[2])],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#BA55D3"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#BA55D3"
            ]
          }]
      };
    }
  }


  ngOnInit() {

    this.pageTitle = "My Dashboard";

  }
  getResponse(): any {

  }

}
