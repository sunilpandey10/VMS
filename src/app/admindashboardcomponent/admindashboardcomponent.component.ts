import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AdmindashboardService } from '../admindashboard.service';
import { AdminDetails } from '../models/adminDetails';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-admindashboardcomponent',
  templateUrl: './admindashboardcomponent.component.html',
  styleUrls: ['./admindashboardcomponent.component.css']
})
export class AdmindashboardcomponentComponent implements OnInit {

  constructor( private router: Router,private adminService: AdmindashboardService,private leaveService: LeaveService) { }
  dataSource;
  displayedColumns = ['empid', 'fullname','annualleave', 'sickleave','recent'];
  empdataSource;
  empdisplayedColumns = ['leavetype', 'description','from_date', 'to_date','num_of_days','action'];
  id:number;

  name:string;
  vacationLeft:any;
  empId:any;
  sickLeave:any;
  recentlyApplied:any;
  takenVacation:any;
  totalVacation:any;



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.adminService.getemployeesinAdminsec().subscribe((data:AdminDetails) => {
      this.dataSource = new MatTableDataSource(data.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  totalEmployees(){
    this.router.navigate(['/home/team']);
  }
  totalClient(){
    this.router.navigate(['/home/setting/clientdetails']);
  }
  getLeaves() {
    debugger;
    this.leaveService.getLeaves().subscribe((results: any) => {
      this.dataSource = new MatTableDataSource(results.leaves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getSingleEmployee(id){
    // console.log('id is ' +id);
    // this.adminService.UserbyId(id).subscribe(data=>{
    //  console.log(data);
    // });
  }
  getBookmanage(){
    this.router.navigate(['/home/setting/managebook']);
  }
  rowClicked(row){
    debugger;
    this.name=row.full_name;
    this.empId=row.employee_id;
    this.vacationLeft=row.annual_leaves;
    this.sickLeave=row.sick_leaves;
    this.recentlyApplied=row.recent_update;
    if(this.vacationLeft){
      var x = this.vacationLeft.split('/');
       this.takenVacation =x[0];
       this.totalVacation =x[1];
    }
  


    this.adminService.UserbyId(row.employee_id).subscribe((data:any)=>{
      this.empdataSource = new MatTableDataSource(data.leaves);
      this.empdataSource.paginator = this.paginator;
      this.empdataSource.sort = this.sort;
  });
}
}
