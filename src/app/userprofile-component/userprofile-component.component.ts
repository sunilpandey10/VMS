import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-userprofile-component',
  templateUrl: './userprofile-component.component.html',
  styleUrls: ['./userprofile-component.component.css']
})
export class UserprofileComponentComponent implements OnInit {

  tools = new FormControl();
  clients = new FormControl();

  toolsList = ['Appium', 'RESTAssured', 'Selenium', 'Protractor', 'JMeter', 'Postman'];
  clientsList = ['GoJek', 'ThoughtWorks', 'Fabacus', 'BCG', 'In-House'];

  constructor() { 
  }

  ngOnInit() {
  }

}
