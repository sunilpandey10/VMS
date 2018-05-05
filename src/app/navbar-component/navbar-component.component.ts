import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  fullImagePath: string;
  constructor(private route:Router) { this.fullImagePath = '../../assets/Images/Untitled.png'}

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');``
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
