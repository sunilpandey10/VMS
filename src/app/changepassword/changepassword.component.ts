import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  newPassword=new FormControl('', [Validators.required]);
  oldPassword=new FormControl('', [Validators.required]);
  conPassword=new FormControl('', [Validators.required]);
  isError:any;
  isSucess:any;
  message:any;

  constructor(private userService:UserService) { }
  getnewPasswordMessage(){
    return this.newPassword.hasError('required') ? 'Password is Required' :'';
   }
   getoldPasswordMessage(){
    return this.oldPassword.hasError('required') ? 'Password is Required' :'';
   }
   getconfPasswordMessage(){
    return this.conPassword.hasError('required') ? 'Password is Required' :'';
   }
  ngOnInit() {
  }
  changePassword(){
    debugger;

this.userService.updatePassword(this.oldPassword.value,this.newPassword.value,this.conPassword.value).subscribe(data=>{
  this.isSucess=false;
  this.isError=false;
  if(!data){
    return;
  }
  this.isSucess=true;
  this.setTimeOutMethod();

},(error)=>{
  this.isError=true;
  if(!error.error.message){
    this.message=error.message;
  } else {
  this.message = error.error.message;
  }
  this.setTimeOutMethod();
})
  }
  setTimeOutMethod(){
    window.setTimeout(function () {
      $(".alert").fadeTo(600, 0).slideUp(600, function () {
        $(this).remove();
        $("#pwdChgModal .close").click();
      });
    }, 1000);
   
  }
}
