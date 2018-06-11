import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AdmindashboardService } from '../admindashboard.service';
import { Profiles } from '../models/profiles';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { getLocaleDateFormat } from '@angular/common';
declare var $:any;

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

  constructor(private adminService:AdmindashboardService) { }

openBrowse(){
    $("#imageUpload").click();
}
fasterPreview(uploader) {
  debugger;
  if ( uploader.srcElement.files && uploader.srcElement.files[0] ){
        $('#profileImage').attr('src',window.URL.createObjectURL(uploader.srcElement.files[0]) );
        console.log(window.URL.createObjectURL(uploader.srcElement.files[0]));
  }
}
changeBrowse(event){
  this.fasterPreview(event);
}

onUpload(file: UploadedFile) {

}
  ngOnInit() {
  this.adminService.getProfile().subscribe((data:Profiles)=>{
    this.dataProfile=data.profiles;
    this.name=data.profiles.first_name;
    })
  }
}



$("#imageUpload").change(function(){
  
});