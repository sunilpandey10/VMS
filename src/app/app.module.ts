import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//mport {PopupModule} from 'ng2-opd-popup';


import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';


@NgModule({
  declarations: [
    LoginComponentComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
   
  ],
  imports: [
    BrowserModule,
  //  PopupModule.forRoot(),
  ],
  providers: [],
  bootstrap: [LoginComponentComponent]
})
export class AppModule { }
