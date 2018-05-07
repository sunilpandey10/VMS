import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ LoginServiceService } from '../login-service.service'
import { CookieService } from 'ngx-cookie-service';

declare var $:any;

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  fullImagePath: string;
  constructor(private route:Router, 
    private cookieService: CookieService,
    private loginservice: LoginServiceService ) { this.fullImagePath = '../../assets/Images/Untitled.png'}

  ngOnInit() {
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

    //this.loginservice.logout().subscribe((access :any)=>{
    //   this.loginservice.refreshToken().subscribe((refresh:any)=>{
      localStorage.removeItem('Tokens');
      this.route.navigate(['/login']);
      //this.cookieService.deleteAll();
     //  });
   // });

  }

}
