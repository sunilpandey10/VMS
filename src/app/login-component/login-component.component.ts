import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Route} from '@angular/router';
import{ LoginServiceService } from '../login-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

var errorMessage='';
declare var $:any;

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit  {
  message:String;
  rememberMe:boolean=false;
  emailText:String='';

  ngOnInit() {
    if (this.cookieService.get('_query2') != null) {
      this.emailText =this.cookieService.get('_query1').toString();
    }
  }
  hide=true;
  isError:boolean =false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('', [Validators.required]);
  contentEditable:boolean;
  constructor (
    private router: Router,
    private loginService: LoginServiceService,
    private cookieService: CookieService
   ) {}
   getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
   getPasswordMessage(){
    return this.password.hasError('required') ? 'Password is Required' :'';
   }
  onSubmit(email, password) {
    this.isError = false;
    this.loginService.userAuthentication(email, password).subscribe((data: any) => {
      debugger;
      if (this.rememberMe && this.email != null) {
        this.cookieService.set('_query1', this.email.value);
        this.cookieService.set('_query2', this.rememberMe.toString());
      }
      else {
        this.rememberMe = false;
        this.cookieService.delete('_query1');
        this.cookieService.delete('_query2');
      }
      this.isError = false;
      var items = data.auth_token;
      localStorage.setItem('Tokens', items);
      this.router.navigate(['/home/dashboard']);

    },
      (err: any) => {
        debugger;
        this.isError = true;
        if(!err.error.message){
          this.message=err.message;
        } else {
        this.message = err.error.message;
        }
        window.setTimeout(function () {
          $(".alert").fadeTo(600, 0).slideUp(600, function () {
            $(this).remove();
          });
        }, 3000);
        this.router.navigate(['/login']);
      });
  }
  rememberchk(event) {
    this.rememberMe = event.target.checked;
  }
}

 



