import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  fullImagePath: string;
  constructor() { this.fullImagePath = '../../assets/Images/Untitled.png'}

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

}
