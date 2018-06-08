import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service'
import { FormControl, NgForm, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { userDetails } from '../models/userDetails';
import { DISABLED } from '@angular/forms/src/model';



@Component({
  selector: 'app-manage-employee-component',
  templateUrl: './manage-employee-component.component.html',
  styleUrls: ['./manage-employee-component.component.css']
})
export class ManageEmployeeComponentComponent implements OnInit {
  flag: any;
  name: any;
  email: any;
  empid: any;
  role: any;
  isactive: any;
  items: any[];
  sortedData: any[];
  demo: any[];
  error: any;
  errormessage: any;
  searchModel: any;




  filteredData: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedCoulumns = ['empid', 'name', 'email', 'role', 'action'];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dataSourcebind();
  }
  nameVal = new FormControl({ value: '', disabled: true }, [Validators.required]);
  emailVal = new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]);
  roleVal = new FormControl('', [Validators.required]);
  empidVal = new FormControl({ value: '', disabled: true }, [Validators.required]);

  usernamecreate = new FormControl('', [Validators.required]);
  emailcreate = new FormControl('', [Validators.required]);
  rolecreate = new FormControl('', [Validators.required]);
  empidcreate = new FormControl('', [Validators.required]);
  desingnationcreate = new FormControl('', [Validators.required]);;

  getRegistered() {
    this.flag = false;
    this.isactive = 1;
    this.userService.registerEmployee(this.emailcreate.value, this.rolecreate.value, this.empidcreate.value, this.usernamecreate.value, this.desingnationcreate.value).subscribe(data => {
      this.flag = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(1000, 0).slideUp(1000, function () {
          $(this).remove();
          $("#addEmployeeModal .close").click();
        });
        this.clearTextfield();
      }, 5000);
    }, (err: any) => {

      this.error = true;
      if (!err.error.message) {
        this.errormessage = err.message;
      } else {
        this.errormessage = err.error.message;
      }
      this.error = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(600, 0).slideUp(600, function () {
          $(this).remove();
          $("#applyleaveModal .close").click()
        });
      }, 1000);
    });
  }
  dataSourcebind() {
    this.userService.getManageEmployee().subscribe((response: userDetails) => {
      if (!response) {
        return;
      }
      this.sortedData = response.users;
      this.dataSource = new MatTableDataSource(response.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (err: any) => {

      this.error = true;
      if (!err.error.message) {
        this.errormessage = err.message;
      } else {
        this.errormessage = err.error.message;
      }
      this.error = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(600, 0).slideUp(600, function () {
          $(this).remove();
          $("#applyleaveModal .close").click()
        });
      }, 1000);
    });
  }
  clearTextfield() {
    this.nameVal.setValue('');
    this.emailVal.setValue('');
    // this.roleVal.setValue('');
    this.empidVal.setValue('');
  }

  getSingleEmployee(id) {
    this.name = this.dataSource.filteredData.find(x => x.emp_id == id).username;
    this.email = this.dataSource.filteredData.find(x => x.emp_id == id).email;
    this.role = this.dataSource.filteredData.find(x => x.emp_id == id).role;
    this.empid = id;
  }
  updateUser(role, id) {
    this.flag = false;
    this.userService.employeeUpdate(role, id).subscribe(response => {
      this.flag = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(1000, 0).slideUp(1000, function () {
          $(this).remove();
          $("#addEmployeeModal .close").click();
        });
      }, 5000);
      this.dataSourcebind();
    }, (err: any) => {

      this.error = true;
      if (!err.error.message) {
        this.errormessage = err.message;
      } else {
        this.errormessage = err.error.message;
      }
      this.error = true;
      window.setTimeout(function () {
        $(".alert").fadeTo(600, 0).slideUp(600, function () {
          $(this).remove();
          $("#applyleaveModal .close").click()
        });
      }, 1000);
    });
    this.clearTextfield();
  }
  disableEmployee(id) {
    var status = 0;
    var x = confirm("Are you sure you want to delete?");
    if (x) {
      this.userService.disableEmployee(id, status).subscribe(data => {
        this.dataSourcebind();
      });
    }
  }
  sortData(searchText) {
    searchText = searchText.toLowerCase();
    this.sortedData = this.sortedData.find(x => x.email == searchText);
    return this.sortedData;
  }

  valuechange(name: any) {

    if (name.length > 0) {
      this.dataSource = new MatTableDataSource(this.sortedData.filter(data => data.username.toLowerCase().indexOf(name.toLowerCase()) === 0));
    }
    else {
      this.dataSource = new MatTableDataSource(this.sortedData);
    }
  }
}

