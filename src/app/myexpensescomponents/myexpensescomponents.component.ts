import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myexpensescomponents',
  templateUrl: './myexpensescomponents.component.html',
  styleUrls: ['./myexpensescomponents.component.css']
})
export class MyexpensescomponentsComponent implements OnInit {
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  public pieChartLabels:string[] = ['Payroll', 'Non-Payroll', 'Others'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  
 
 
  constructor() { }

  ngOnInit() {
  }

}
