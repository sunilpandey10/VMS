import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AdmindashboardService } from '../admindashboard.service';
import { Profiles } from '../models/profiles';

@Component({
  selector: 'app-userprofile-component',
  templateUrl: './userprofile-component.component.html',
  styleUrls: ['./userprofile-component.component.css']
})
export class UserprofileComponentComponent implements OnInit {

  tools = new FormControl();
  clients = new FormControl();

  dataProfile:any;
  name:string;

  toolsList = ['Appium', 'RESTAssured', 'Selenium', 'Protractor', 'JMeter', 'Postman'];
  clientsList = ['GoJek', 'ThoughtWorks', 'Fabacus', 'BCG', 'In-House'];

  constructor(private adminService:AdmindashboardService) { 
   
  }

  ngOnInit() {
  this.adminService.getProfile().subscribe((data:Profiles)=>{
    this.dataProfile=data.profiles;
    this.name=data.profiles.first_name;
     console.log(this.dataProfile);
    })
  }

}
