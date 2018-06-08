import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdmindashboardService } from '../admindashboard.service';

@Component({
  selector: 'app-employee-details-leave',
  templateUrl: './employee-details-leave.component.html',
  styleUrls: ['./employee-details-leave.component.css']
})
export class EmployeeDetailsLeaveComponent implements OnInit {
  @Input() id:any;
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private AdminService: AdmindashboardService) { }

  ngOnInit() {
    this.AdminService.UserbyId(this.id).subscribe(data=>{
    //this.dataSource = new MatTableDataSource(data);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    })
  }

}
