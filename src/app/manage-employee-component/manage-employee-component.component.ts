import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service'


@Component({
  selector: 'app-manage-employee-component',
  templateUrl: './manage-employee-component.component.html',
  styleUrls: ['./manage-employee-component.component.css']
})
export class ManageEmployeeComponentComponent implements OnInit {
empid:any;
email:any;

  constructor(private userService:UserService) { }

  ngOnInit() {

    // this.userService.registerEmployee().subscribe(data => {

    // });

  }

}
