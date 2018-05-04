import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ LoginServiceService } from '../login-service.service'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  hide=true;
  
  ngOnInit() {
  }
  constructor (
    private router: Router,
    private loginService: LoginServiceService
   ) {}

  onSubmit(userName,password){
   this.loginService.userAuthentication('example1@example.com','123456').subscribe((data : any)=>{
    console.log(data.refresh_token);
    localStorage.setItem('userToken',data.access_token);
    localStorage.setItem('refreshToken',data.refresh_token);
    this.router.navigate(['/home']);
  },
  (err : HttpErrorResponse)=>{
   console.log("error " + err.message);
  });
}
}
