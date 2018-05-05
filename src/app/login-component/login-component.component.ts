import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Route} from '@angular/router';
import{ LoginServiceService } from '../login-service.service'
import { HttpErrorResponse } from '@angular/common/http';

var isError=false;
var errorMessage='';
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
    private loginService: LoginServiceService,
    
   ) {}

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
