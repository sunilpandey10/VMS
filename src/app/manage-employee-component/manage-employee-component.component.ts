import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service'
import {FormControl, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-manage-employee-component',
  templateUrl: './manage-employee-component.component.html',
  styleUrls: ['./manage-employee-component.component.css']
})
export class ManageEmployeeComponentComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
   
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  role=new FormControl('', [Validators.required]);
  empid=new FormControl('',[Validators.required])
  getRegistered(){
    debugger;
  
    this.userService.registerEmployee(this.email.value,this.role.value,this.empid.value).subscribe(data => {
    
    });
  }

}
