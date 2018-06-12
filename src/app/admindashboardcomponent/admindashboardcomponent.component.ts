import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AdmindashboardService } from '../admindashboard.service';
import { AdminDetails } from '../models/adminDetails';
import { LeaveService } from '../leave.service';
import { MyTeamService } from '../my-team.service';
import { ConfirmationService } from 'primeng/primeng';
import { ManageReferencesComponentComponent } from '../manage-references-component/manage-references-component.component'

@Component({
  selector: 'app-admindashboardcomponent',
  templateUrl: './admindashboardcomponent.component.html',
  styleUrls: ['./admindashboardcomponent.component.css']
})
export class AdmindashboardcomponentComponent implements OnInit {

  constructor(private router: Router, private adminService: AdmindashboardService, private leaveService: LeaveService, private myTeamService: MyTeamService
    , private confirmationService: ConfirmationService) { }
  dataSource;
  displayedColumns = ['empid', 'fullname', 'annualleave', 'sickleave', 'recent'];
  empdataSource;
  empdisplayedColumns = ['leavetype', 'description', 'from_date', 'to_date', 'num_of_days', 'action'];
  id: number;
  sortedData: any[];
  name: string;
  vacationLeft: any;
  empId: any;
  sickLeave: any;
  recentlyApplied: any;
  takenVacation: any;
  totalVacation: any;
  searchModel: any;
  rejectScucess: any;
  isError: any;
  message: any;
  booksCount: any;
  clientsCount: any;
  usersCount: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getDashboardCount();
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.adminService.getemployeesinAdminsec().subscribe((data: AdminDetails) => {
      this.sortedData = data.users;
      this.dataSource = new MatTableDataSource(data.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  totalEmployees() {
    this.router.navigate(['/home/team']);
  }
  totalClient() {
    this.router.navigate(['/home/setting']);
    new ManageReferencesComponentComponent().selectTab(1);
  }
  getSkillsmanage() {
    this.router.navigate(['/home/setting']);
    new ManageReferencesComponentComponent().selectTab(4);
  }
  getLeaves() {
    this.leaveService.getLeaves().subscribe((results: any) => {
      this.dataSource = new MatTableDataSource(results.leaves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getSingleEmployee(id) {

  }
  disableEmployee(id) {
    // this.confirmationService.confirm({
    //   message: 'Do you want to delete this record?',
    //   header: 'Delete Confirmation',
    //   icon: 'pi pi-info-circle',
    //   accept: () => {
    this.isError = false;
    this.rejectScucess = false;
    this.leaveService.rejectleaves(id).subscribe(data => {
      if (!data) {
        return;
      }
      this.getEmployeesList();
      this.getEmployeeLeaves(this.empId);
      this.rejectScucess = true;
      this.setClose();
    }, (err: any) => {
      this.isError = true;
      if (!err.error.message) {
        this.message = err.message;
      } else {
        this.message = err.error.message;
      }
      this.setClose();
    });

    // }});
  }
  setClose() {
    window.setTimeout(function () {
      $(".alert").fadeTo(600, 0).slideUp(600, function () {
        $(this).remove();
      });
    }, 1000);

  }
  valuechange(name: string) {
    if (name.length > 0) {
      this.dataSource = new MatTableDataSource(this.sortedData.filter(data => data.full_name.toLowerCase().indexOf(name.toLowerCase()) === 0));
    }
    else {
      this.dataSource = new MatTableDataSource(this.sortedData);
    }
  }
  getBookmanage() {
    this.router.navigate(['/home/setting']);
    new ManageReferencesComponentComponent().selectTab(3);
  }
  rowClicked(row) {
    this.empdataSource = '';
    this.name = row.full_name;
    this.empId = row.employee_id;
    this.vacationLeft = row.annual_leaves;
    this.sickLeave = row.sick_leaves;
    this.recentlyApplied = row.recent_update;
    if (this.vacationLeft) {
      var x = this.vacationLeft.split('/');
      this.takenVacation = x[0];
      this.totalVacation = x[1];
    }
    this.getEmployeeLeaves(this.empId);

  }
  getEmployeeLeaves(id) {
    debugger;
    this.adminService.UserbyId(id).subscribe((data: any) => {
      this.empdataSource = new MatTableDataSource(data.leaves);
      this.empdataSource.paginator = this.paginator;
      this.empdataSource.sort = this.sort;
    });
  }
  getDashboardCount() {
    this.myTeamService.getadminDashboard().subscribe((data: any) => {
      this.booksCount = data.books;
      this.clientsCount = data.clients;
      this.usersCount = data.users;
    })
  }
}
