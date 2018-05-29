import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ LoginServiceService } from '../login-service.service'
import { CookieService } from 'ngx-cookie-service';
import{UserService} from '../user.service'
import { Dashboard } from '../models/dashboard';

declare var $:any;

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  fullImagePath: string;
  dashboard=[];
  constructor(private route:Router, 
    private cookieService: CookieService,
    private loginservice: LoginServiceService ,
    private userService:UserService) 
    { this.fullImagePath = '../../assets/Images/Untitled.png'}

  ngOnInit() {

    this.userService.dashboard().subscribe((data:Dashboard)=>{
    this.dashboard=data.dashboard;
    console.log(this.dashboard);
    });
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
  $('#sidebarCollapselg').on('click', function () {
    $('#sidebar').toggleClass('active');``
});
  $(function() {
    $('#sidebar').addClass('active');
  });

  }
  logOut(){
      localStorage.removeItem('Tokens');
      this.route.navigate(['/login']);

  }

}
