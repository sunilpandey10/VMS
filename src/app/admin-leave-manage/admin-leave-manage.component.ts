import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { AdmindashboardService } from '../admindashboard.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { AdminDetails } from '../models/adminDetails';

@Component({
  selector: 'app-admin-leave-manage',
  templateUrl: './admin-leave-manage.component.html',
  styleUrls: ['./admin-leave-manage.component.css'],
})
export class AdminLeaveManageComponent implements OnInit {

  dataSource;
  displayedColumns = ['empid', 'fullname','annualleave', 'sickleave','recent'];

  id:number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdmindashboardService) { }

  ngOnInit() { 
    this.adminService.getemployeesinAdminsec().subscribe((data:AdminDetails) => {
      this.dataSource = new MatTableDataSource(data.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  rowClicked(rowid: any): void {
  
    console.log(rowid);
  }

}
