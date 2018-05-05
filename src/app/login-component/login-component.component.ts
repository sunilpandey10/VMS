import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Route} from '@angular/router';
import{ LoginServiceService } from '../login-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

var isError=false;
var errorMessage='';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  hide=true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('', [Validators.required]);
  contentEditable:boolean;
  constructor (
    private router: Router,
    private loginService: LoginServiceService,
    
   ) {}
   getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
   getPasswordMessage(){
    return this.password.hasError('required') ? 'Password is Required' :'';
   }
  onSubmit(email,password){
    this.loginService.userAuthentication(email, password).subscribe((data: any) => {
      console.log('username is ' + email + 'and password is ' + password);
      if (!data.message) {
        var items = [];
        items.push(data.access_token);
        items.push(data.refresh_token);
        localStorage.setItem('Tokens', JSON.stringify(items));
        console.log(data.message);
        this.router.navigate(['/home/dashboard']);
      } 
      else
      {
        console.log('Error Occured');
      } 
  },
  (err:any)=>{
    isError=true;
    errorMessage=err.statusText;
   console.log("error " +errorMessage);
  });
}
}



