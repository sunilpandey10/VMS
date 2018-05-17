import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytimereportcomponent',
  templateUrl: './mytimereportcomponent.component.html',
  styleUrls: ['./mytimereportcomponent.component.css']
})
export class MytimereportcomponentComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40,40,50,60,15,12], label: 'Series A'},
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
