import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public pieChartLabels:string[] = ['Annual Leave', 'Sick Leave'];
  public pieChartData:number[] = [22, 5];
  public pieChartType:string = 'pie';

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
  constructor() { }

  ngOnInit() {
    this.pageTitle="My Dashboard";
  }

}
