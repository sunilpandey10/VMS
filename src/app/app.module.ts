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
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, } from '@angular/material'
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

const appRoutes: Routes = [

  { path: 'home', component: HomeComponentComponent },
  { path: 'calendar', component: CalendarComponentComponent },
  { path: 'report', component: EditregisterComponentComponent },
  { path: 'profile', component: UserprofileComponentComponent },
  { path: 'setting', component: ExpensesComponentComponent },
  { path: 'timesheet', component: TimeComponentComponent },
  { path: 'team', component: ApplyleaveComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
    MatButtonModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgbModalModule.forRoot(),
    RouterModule.forRoot(appRoutes,

    )
  ],
  providers: [UserService],
  bootstrap: [NavbarComponentComponent]
})
export class AppModule { }
