import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule, MatAutocompleteModule, MatPaginatorModule, MatProgressSpinnerModule, MatToolbarModule, MatTableModule, MatSortModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatIconModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { AuthGuard } from './Auth/auth.guard';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { TimeComponentComponent } from './time-component/time-component.component';
import { ExpensesComponentComponent } from './expenses-component/expenses-component.component';
import { SettingComponentComponent } from './setting-component/setting-component.component';
import { EditregisterComponentComponent } from './editregister-component/editregister-component.component';
import { UserprofileComponentComponent } from './userprofile-component/userprofile-component.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { TeamdirectoryComponentComponent } from './teamdirectory-component/teamdirectory-component.component';
import { ApplyleaveComponentComponent } from './applyleave-component/applyleave-component.component'
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ProfilemodalComponentComponent } from './profilemodal-component/profilemodal-component.component';
import { EditprofileComponentComponent } from './editprofile-component/editprofile-component.component';
import { ReportComponentComponent } from './report-component/report-component.component';
import { ApplyleavemodalComponentComponent } from './applyleavemodal-component/applyleavemodal-component.component';
import { MyTeamService } from './my-team.service';
import { LoginServiceService } from "./login-service.service"
import { MyleavesComponentsComponent } from './myleaves-components/myleaves-components.component';
import { ManageEmployeeComponentComponent } from './manage-employee-component/manage-employee-component.component';
import { ClientDetailsComponentComponent } from './client-details-component/client-details-component.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { PagenotFoundcomponentComponent } from './pagenot-foundcomponent/pagenot-foundcomponent.component';
import { CookieService } from 'ngx-cookie-service';
import { AlertcomponentComponent } from './alertcomponent/alertcomponent.component';
import { AlertServiceService } from './alert-service.service';
import { ChangepasswordcomponentComponent } from './changepasswordcomponent/changepasswordcomponent.component';
import { LeaveService } from './leave.service';
import { ManageLeavesComponentComponent } from './manage-leaves-component/manage-leaves-component.component';
import { httpInterceptor } from './http-interceptor';
import { MyexpensescomponentsComponent } from './myexpensescomponents/myexpensescomponents.component';
import { MytimereportcomponentComponent } from './mytimereportcomponent/mytimereportcomponent.component';
import { ChartModule } from 'primeng/primeng';
import { AdmindashboardcomponentComponent } from './admindashboardcomponent/admindashboardcomponent.component';
import { AdmindashboardService } from './admindashboard.service';
import { AdminLeaveManageComponent } from './admin-leave-manage/admin-leave-manage.component';
import { AdminLeaveModalComponent } from './admin-leave-modal/admin-leave-modal.component';
import { EmployeeDetailsLeaveComponent } from './employee-details-leave/employee-details-leave.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { BookmanageComponent } from './bookmanage/bookmanage.component';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { ConfirmDialogModule, ConfirmationService, GrowlModule } from 'primeng/primeng';
import { ClientdataService } from './clientdata.service';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
import { ManageReferencesComponentComponent } from './manage-references-component/manage-references-component.component';
import { SlackServiceService } from './slack-service.service';
import { CalenderServiceService } from './user.calender-service.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponentComponent },

  {
    path: 'home', component: NavbarComponentComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: HomeComponentComponent },
      { path: 'calendar', component: CalendarComponentComponent },
      { path: 'report', component: ReportComponentComponent },
      { path: 'profile', component: UserprofileComponentComponent },
      { path: 'expenses', component: ExpensesComponentComponent },
      { path: 'timesheet', component: TimeComponentComponent },
      { path: 'references', component: BookcomponentComponent },
      { path: 'setting', component: ManageReferencesComponentComponent },
      { path: 'profile', component: UserprofileComponentComponent },

      { path: 'admindashboard', component: AdmindashboardcomponentComponent },

      { path: 'team', component: TeamdirectoryComponentComponent },

    ]
  },
  { path: 'changepassword', component: ChangepasswordcomponentComponent },
  { path: '**', component: PagenotFoundcomponentComponent }

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
    ReportComponentComponent,
    ApplyleavemodalComponentComponent,
    MyleavesComponentsComponent,
    ManageEmployeeComponentComponent,
    ClientDetailsComponentComponent,
    AppComponentComponent,
    PagenotFoundcomponentComponent,
    AlertcomponentComponent,
    ChangepasswordcomponentComponent,
    ManageLeavesComponentComponent,
    MyexpensescomponentsComponent,
    MytimereportcomponentComponent,
    AdmindashboardcomponentComponent,
    AdminLeaveManageComponent,
    AdminLeaveModalComponent,
    EmployeeDetailsLeaveComponent,
    ChangepasswordComponent,
    BookmanageComponent,
    BookcomponentComponent,
    ManageReferencesComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule,
    ChartModule,
    FullCalendarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    GrowlModule,
    ConfirmDialogModule,
    FancyImageUploaderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatAutocompleteModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgbModalModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [AuthGuard, AlertServiceService, SlackServiceService, ConfirmationService, LoginServiceService, CookieService, CalenderServiceService, UserService, MyTeamService, LeaveService, AdmindashboardService, ClientdataService
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: httpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponentComponent]
})
export class AppModule { }
