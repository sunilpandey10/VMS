import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.css']
})
export class ReportComponentComponent implements OnInit {
 // lineChart
 public lineChartData:Array<any> = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90]
];
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartType:string = 'line';
public pieChartType:string = 'pie';

  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['Annual', 'Sick', 'Others'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
