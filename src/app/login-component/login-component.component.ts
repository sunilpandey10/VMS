import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  hide=true;
  ngOnInit() {
  }
 
  name:any;
  password:any;
  onSubmit(name,password){

    console.log("message logged");

  }

}
