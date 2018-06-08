import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service'
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service'
import { Dashboard } from '../models/dashboard';
import { UserprofileComponentComponent } from '../userprofile-component/userprofile-component.component'
import { Profiles } from '../models/profiles';
import { AdmindashboardService } from '../admindashboard.service';
import { LeaveService } from '../leave.service';

declare var $: any;

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  public text: boolean = false;

  fullImagePath: string;
  dashboard = [];
  userName: string;
  dataProfile: any;
  name: string;
  timerSubscription: any;

  @ViewChild(UserprofileComponentComponent) uname;
  constructor(private route: Router,
    private cookieService: CookieService,
    private loginservice: LoginServiceService,
    private userService: UserService,
    private adminService: AdmindashboardService,
    private Route: Router,
    private leaveService: LeaveService
  ) {
  this.fullImagePath = '../../assets/Images/Untitled.png'
    this.adminService.getProfile().subscribe((data: Profiles) => {
      this.dataProfile = data.profiles[0];
      this.name = data.profiles[0].first_name;
    });
  }


  ngOnInit() {
    this.userService.dashboard().subscribe((data: Dashboard) => {
      this.dashboard = data.dashboard;
    });
    if (this.Route.url == '/home/dashboard') {
      this.text = true;
    }
    else {
      this.text = false;
    }

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
    $('#sidebarCollapselg').on('click', function () {
      $('#sidebar').toggleClass('active'); ``
    });
    $(function () {
      $('#sidebar').addClass('active');
    });

  }
  logOut() {
    localStorage.removeItem('Tokens');
    this.route.navigate(['/login']);

  }
  getLeaves() {
    this.leaveService.getLeaves().subscribe((results: any) => {
      if (!results) {
        return;
      }
    });

  }

}



