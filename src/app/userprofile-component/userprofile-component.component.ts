import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdmindashboardService } from '../admindashboard.service';
import { Profiles } from '../models/profiles';
import { Observable } from 'indefinite-observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { MyTeamService } from '../my-team.service';
import { SkillsEnum } from '../models/skillsmodal';


declare var $: any;

@Component({
  selector: 'app-userprofile-component',
  templateUrl: './userprofile-component.component.html',
  styleUrls: ['./userprofile-component.component.css']
})

export class UserprofileComponentComponent implements OnInit {

  tools = new FormControl();
  clients = new FormControl();

  dataProfile: any;
  name: string;
  id: number;
  username: any;
  dob: any;
  desing: any;
  expyear: any;
  monthexp: any;
  joiningdate: any;
  location: any;
  github: any;
  bitbucket: any;
  linkedin: any;
  mobile: any;
  email: any;
  hometown: any;
  imageurl: any;
  expmonth: any;
  gender: any;
  slack: any;
  datetobeinFormat: any;
  month: any;
  skillsSet:string='';
  // skillsSet = [];


  toolsList = [];

  options = ['Appium', 'RESTAssured', 'Selenium', 'Protractor', 'JMeter', 'Postman'];

  clientsList = ['GoJek', 'ThoughtWorks', 'Fabacus', 'BCG', 'In-House'];

  constructor(private adminService: AdmindashboardService,
    private teamServices: MyTeamService) { }
  filteredOptions: Observable<string[]>;
 
  myControl: FormControl = new FormControl();
  filtered() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''), map(val => this.filter(val))
      );
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  openBrowse() {
    $("#imageUpload").click();
  }
  fasterPreview(uploader) {
    if (uploader.srcElement.files && uploader.srcElement.files[0]) {
      $('#profileImage').attr('src', window.URL.createObjectURL(uploader.srcElement.files[0]));
    }
  }
  changeBrowse(event) {
    this.fasterPreview(event);
  }

  updateProfile() {
    this.tools.value.forEach(element => {
    this.skillsSet =  this.skillsSet + "{\"id\" :"+SkillsEnum[element]+"},";
    })
   var toolsframework= "[" + this.skillsSet.toString().substring(0,  this.skillsSet .length -1)+ "]";
    this.adminService.updateProfile(this.username, this.desing, this.expyear, this.expmonth, this.gender, toolsframework, this.clientsList,
      this.location, this.location, this.mobile,
      this.imageurl, this.linkedin, this.github, this.slack, this.getChangeDate(this.dob), this.bitbucket).subscribe(data => {
      })
  }
  getSkils() {
    this.teamServices.getSkills().subscribe((data: any) => {
      data.forEach(element => {
        this.toolsList.push(element.name);
      });
    })
  }
  getChangeDate(dateTobeChange) {
    this.datetobeinFormat = new Date(dateTobeChange);
    this.month = (this.datetobeinFormat.getMonth() < 10 ? '0' : '') + (this.datetobeinFormat.getMonth() + 1);
    return this.datetobeinFormat = this.datetobeinFormat.getFullYear()+ "-" + this.month + "-" + this.datetobeinFormat.getDate();
  }
  ngOnInit() {
    this.getProfile();
    this.filtered();
    this.getSkils();
  }
  getProfile() {
    this.adminService.getProfile().subscribe((data: Profiles) => {
      if (!data) {
        return;
      }
      this.dataProfile = data.profiles[0];
      this.username = this.dataProfile.username;
      this.email = this.dataProfile.email;
      this.dob = new Date(this.dataProfile.dob);
      this.gender = this.dataProfile.gender;
      this.hometown = this.dataProfile.address;
      this.slack = this.dataProfile.slack;
      this.desing = this.dataProfile.designation;
      this.expyear = this.dataProfile.exp_years;
      this.expmonth = this.dataProfile.exp_months;
      this.id = this.dataProfile.emp_id;
      this.joiningdate = new Date(this.dataProfile.joining_date);
      this.location = this.dataProfile.location;
      this.github = this.dataProfile.github;
      this.bitbucket = this.dataProfile.bit_bucket;
      this.linkedin = this.dataProfile.linked_in;
      this.mobile = this.dataProfile.mobile;
      this.imageurl = this.dataProfile.image_url; 
      // this.tools = this.dataProfile.skills;
    })
  }

}



