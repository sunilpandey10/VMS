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
  isactive:any;



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
  emailcreate = new FormControl('' , [Validators.required]);
  rolecreate = new FormControl('', [Validators.required]);
  empidcreate = new FormControl('', [Validators.required]);

  getRegistered() {
    debugger;
    this.flag = false;
    this.isactive=1;
    this.userService.registerEmployee(this.emailcreate.value, this.rolecreate.value, this.empidcreate.value, this.usernamecreate.value,this.isactive).subscribe(data => {
      this.flag = true;

      window.setTimeout(function () {
        $(".alert").fadeTo(1000, 0).slideUp(1000, function () {
          $(this).remove();
          $("#addEmployeeModal .close").click();
        });
        this.clearTextfield();
      }, 5000);
    }, error => {
      console.log(error.status);
    });
  }
  dataSourcebind() {
    this.userService.getManageEmployee().subscribe((response: userDetails) => {
      if (!response) {
        return;
      }
      this.dataSource = new MatTableDataSource(response.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error=>{
      console.log('error is '+error.message);
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
        this.clearTextfield();
      }, 5000);
      this.dataSourcebind();
    }, error => {
      console.log(error.status);
    });
    this.clearTextfield();
  }

}
