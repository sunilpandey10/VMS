import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-manage-references-component',
  templateUrl: './manage-references-component.component.html',
  styleUrls: ['./manage-references-component.component.css']
})
export class ManageReferencesComponentComponent implements OnInit, OnChanges {
  selected :any=0;
  ind:number;

  constructor() { 
  }

  selectTab(index: any): void {
  sessionStorage.setItem('tabValue',index)
  }
  ngOnInit() {
    this.selected = sessionStorage.getItem('tabValue');
    sessionStorage.removeItem('tabValue');
    console.log(this.selected);
  }
  ngOnChanges() {

  }

}
