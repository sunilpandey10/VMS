import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatIconModule, MatCheckboxModule } from '@angular/material'
import 'hammerjs';

import { MatSelectModule } from '@angular/material/select';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { TimeComponentComponent } from './time-component/time-component.component';
import { ExpensesComponentComponent } from './expenses-component/expenses-component.component';
import { SettingComponentComponent } from './setting-component/setting-component.component';
import { EditregisterComponentComponent } from './editregister-component/editregister-component.component';
import { UserprofileComponentComponent } from './userprofile-component/userprofile-component.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { TeamdirectoryComponentComponent } from './teamdirectory-component/teamdirectory-component.component';
import { ApplyleaveComponentComponent } from './applyleave-component/applyleave-component.component'
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ProfilemodalComponentComponent } from './profilemodal-component/profilemodal-component.component';
import { EditprofileComponentComponent } from './editprofile-component/editprofile-component.component';
//import { ReportComponentNgComponent } from './report-component-ng/report-component-ng.component';
import { ReportComponentComponent } from './report-component/report-component.component';
import { ApplyleavemodalComponentComponent } from './applyleavemodal-component/applyleavemodal-component.component';
import { MyTeamService } from './my-team.service';
import { MyleavesComponentsComponent } from './myleaves-components/myleaves-components.component';
// import { ReusablemodalComponentComponent } from './reusablemodal-component/reusablemodal-component.component';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponentComponent },
  { path: 'calendar', component: CalendarComponentComponent },
  { path: 'report', component: ReportComponentComponent },
  { path: 'profile', component: UserprofileComponentComponent },
  { path: 'expenses', component: ExpensesComponentComponent },
  { path: 'timesheet', component: TimeComponentComponent },
  { path: 'team', component: TeamdirectoryComponentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: EditregisterComponentComponent }

];

@NgModule({
  declarations: [
    LoginComponentComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    TimeComponentComponent,
    ExpensesComponentComponent,
    SettingComponentComponent,
    EditregisterComponentComponent,
    UserprofileComponentComponent,
    TeamdirectoryComponentComponent,
    CalendarComponentComponent,
    ApplyleaveComponentComponent,
    CalendarComponentComponent,
    FooterComponentComponent,
    ProfilemodalComponentComponent,
    EditprofileComponentComponent,
    //ReportComponentNgComponent,
    ReportComponentComponent,
    ApplyleavemodalComponentComponent,
    MyleavesComponentsComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    FullCalendarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgbModalModule.forRoot(),
    RouterModule.forRoot(appRoutes,{useHash: true}

    )
  ],
  providers: [UserService,MyTeamService],
  bootstrap: [NavbarComponentComponent]
})
export class AppModule { }
