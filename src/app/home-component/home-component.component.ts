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
  totalLabel:any;
  usedLeave:any;
  remainingLabel:any;


  public datafor: number[];
  public pieChartLabels: string[] = ['Annual Leave', 'Sick Leave'];
  public pieChartData: number[] = this.trackLeave;

  public pieChartType: string = 'pie';


  pageTitle: string;

  constructor(private myTeamService: MyTeamService) {
   
    this. getTrackLeaves();
    this.data = {
      labels: [this.totalLabel, this.usedLeave, this.remainingLabel],
      datasets: [
        {

          data: [Number(this.trackLeave[0]), Number(this.trackLeave[1]), (Number(this.trackLeave[0]) - Number(this.trackLeave[1]))],
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
  
    getTrackLeaves(){
      debugger;
      var x;
      this.myTeamService.trackUserLeave().subscribe((data: LeaveTrack) => {
      this.anuualLeave = data.track[0].total_annual_leaves_taken;
      this.totalLeave = data.track[0].total_annual_leaves;
      this.sickLeave = data.track[0].total_sick_leaves;
      x = this.totalLeave + "," + this.anuualLeave + "," + this.sickLeave;

      sessionStorage.setItem('val', x);
    });
      // this.trackLeave[0]='';
      // this.trackLeave[1]='';
      this.trackLeave = sessionStorage.getItem('val').split(",");
      sessionStorage.removeItem('val');

      this.totalLabel = 'Total ' + this.trackLeave[0];
      this.usedLeave = 'Used ' + this.trackLeave[1];
      var sub = (Number(this.trackLeave[0]) - Number(this.trackLeave[1]));
      this.remainingLabel = 'Remaining ' + sub;

    }


  ngOnInit() {

    this.pageTitle = "My Dashboard";
   // this.getTrackLeaves();

  }
  getResponse(): any {

  }

}
