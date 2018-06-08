import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.css']
})
export class ReportComponentComponent implements OnInit {
 // lineChart
 public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul','Aug','Sep','Oct','Nov','Dec'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Annual Leave'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Sick Leave'}
];

  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['Annual', 'Sick', 'Others'];
  public doughnutChartData:number[] = [22, 12, 5];
  public doughnutChartType:string = 'doughnut';
 
  public chartClicked(e:any):void {
  
  }
 
  public chartHovered(e:any):void {
   
  }
}
