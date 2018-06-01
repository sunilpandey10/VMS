import { Component, OnInit, ViewChild } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { MyTeamService } from '../my-team.service';
import { AsyncPipe } from '@angular/common';
import { Profiles } from '../models/profiles';

@Component({
  selector: 'app-teamdirectory-component',
  templateUrl: './teamdirectory-component.component.html',
  styleUrls: ['./teamdirectory-component.component.css']
})

export class TeamdirectoryComponentComponent implements OnInit {
teamMemberSource:any[];

  constructor(private teamService:MyTeamService) {
  }
  ngOnInit() {
   this.teamService.getUsersProfile().subscribe((data:Profiles)=>{
    this.teamMemberSource=data.profiles;
    console.log(this.teamMemberSource);
    });
  }

}
