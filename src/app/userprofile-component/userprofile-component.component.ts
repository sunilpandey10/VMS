import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdmindashboardService } from '../admindashboard.service';
import { Profiles } from '../models/profiles';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { getLocaleDateFormat } from '@angular/common';
import { FileUploadModule } from 'primeng/primeng';
import { Observable } from 'indefinite-observable';
// import { startWith } from 'rxjs/operator/startWith';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';


declare var $: any;

@Component({
  selector: 'app-userprofile-component',
  templateUrl: './userprofile-component.component.html',
  styleUrls: ['./userprofile-component.component.css']
})

export class UserprofileComponentComponent implements OnInit {
//   options: FancyImageUploaderOptions = {
//     thumbnailHeight: 150,
//     thumbnailWidth: 150,
//     uploadUrl: '../../assets/Images',
//     allowedImageTypes: ['image/png', 'image/jpeg'],
//     maxImageSize: 3
// };


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
  imageurl:any;
  expmonth:any;
  gender:any;
  slack:any;
  datetobeinFormat:any;
  month:any;
  // filteredOptions:any;
 
  toolsList=['Appium', 'RESTAssured', 'Selenium', 'Protractor', 'JMeter', 'Postman'];

  options = ['Appium', 'RESTAssured', 'Selenium', 'Protractor', 'JMeter', 'Postman'];
  
  clientsList = ['GoJek', 'ThoughtWorks', 'Fabacus', 'BCG', 'In-House'];

  constructor(private adminService: AdmindashboardService) { }
  filteredOptions: Observable<string[]>;

  myControl: FormControl = new FormControl();
  filtered(){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),map(val => this.filter(val))
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
      console.log(window.URL.createObjectURL(uploader.srcElement.files[0]));
    }
  }
  changeBrowse(event) {
    this.fasterPreview(event);
  }

  onUpload(file: UploadedFile) {
    console.log(file.response);
  }
  updateProfile() {
    debugger;
    this.adminService.updateProfile(this.username,this.desing,this.expyear,this.expmonth,this.gender,this.toolsList,this.clientsList,
      this.location,this.location,this.mobile,
      this.imageurl,this.linkedin,this.github,this.slack,this.getChangeDate(this.dob),this.bitbucket).subscribe(data => {

    })
  }
  getChangeDate(dateTobeChange) {
    debugger;
    this.datetobeinFormat = new Date(dateTobeChange);
    this.month = (this.datetobeinFormat.getMonth() < 10 ? '0' : '') + (this.datetobeinFormat.getMonth() + 1);
    return this.datetobeinFormat = this.month+"/"+this.datetobeinFormat.getDate() +"/"+this.datetobeinFormat.getFullYear();
  }
  ngOnInit() {
   this.getProfile();
   this.filtered();
  }
  getProfile() {
    this.adminService.getProfile().subscribe((data: Profiles) => {
      if (!data) {
        return;
      }
      debugger;
      this.dataProfile = data.profiles[0];
      this.username = this.dataProfile.username;
      this.email = this.dataProfile.email;
      this.dob = new Date(this.dataProfile.dob);
      this.gender=this.dataProfile.gender;
      this.hometown=this.dataProfile.address;
      this.slack=this.dataProfile.slack;
      this.desing = this.dataProfile.designation;
      this.expyear = this.dataProfile.exp_years;
      this.expmonth=this.dataProfile.exp_months;
      this.id = this.dataProfile.emp_id;
      this.joiningdate = new Date(this.dataProfile.joining_date);
      this.location = this.dataProfile.location;
      this.github = this.dataProfile.github;
      this.bitbucket = this.dataProfile.bit_bucket;
      this.linkedin = this.dataProfile.linked_in;
      this.mobile = this.dataProfile.mobile;
      this.imageurl = this.dataProfile.image_url;
    })
  }

}



