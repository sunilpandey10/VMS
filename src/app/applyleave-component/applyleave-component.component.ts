import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-applyleave-component',
  templateUrl: './applyleave-component.component.html',
  styleUrls: ['./applyleave-component.component.css']
})
export class ApplyleaveComponentComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: ");
}
}
