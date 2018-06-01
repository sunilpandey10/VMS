import { Component, OnInit } from '@angular/core';
import {MyTeamService} from '../my-team.service';
import { LeaveTrack } from '../models/leaveTrack';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  trackLeave:any[];
  leaveRemaining:any;
  anuualLeave:any;
  totalLeave:number;
  sickLeave:any;
  data:any;

  public pieChartLabels:string[]=['Annual Leave','Sick Leave'];
  public pieChartData:number[]=this.leaveRemaining;
  public pieChartType:string ='pie';

  public doughnutChartLabels:string[] = ['Total Hrs', 'Charged Hrs'];
  public doughnutChartData:number[] = [40,30];
  public doughnutChartType:string = 'doughnut';

  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
  };
  public barChartLabels:string[] = ['JAN','FEB','MAR'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80], label: 'Expenses in INR'},
    
  ];

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

pageTitle:string;

  constructor(private myTeamService:MyTeamService) {
    var x;
    this.myTeamService.trackUserLeave().subscribe((data:LeaveTrack)=>{
      console.log(data);
      this.anuualLeave=data.track[0].total_annual_leaves_left;
      this.totalLeave=data.track[0].total_annual_leaves;
      this.sickLeave=data.track[0].total_sick_leaves;
      x=this.totalLeave +","+this.anuualLeave+","+this.sickLeave;
     console.log(x);
     
     if (sessionStorage.getItem('val') != null){
       sessionStorage.removeItem('val');
     }
     sessionStorage.setItem('val',x);
    });
    
    if(sessionStorage.getItem('val')!=null) 
    {
    this.trackLeave = sessionStorage.getItem('val').split(",");
    
    var totalLabel='Total '+ this.trackLeave[0];
    var usedLeave= 'Used '+ this.trackLeave[1];
    var sub=(Number(this.trackLeave[0])-Number(this.trackLeave[1]));
    var remainingLabel='Remaining '+ sub;
    var sickLabel=' Sick '+this.trackLeave[2];
    this.data = {
      labels: [totalLabel,usedLeave,remainingLabel,sickLabel],
      datasets: [
          { 
        
              data: [Number(this.trackLeave[0]),Number(this.trackLeave[1]),(Number(this.trackLeave[0])-Number(this.trackLeave[1])),Number(this.trackLeave[2])],     
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

    this.pageTitle="My Dashboard";

  }


getResponse():any{
  debugger;
 
}

}
