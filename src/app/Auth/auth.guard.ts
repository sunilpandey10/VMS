import { Injectable,isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(!(isDevMode())&& (location.protocol !== 'https:'))
      {
       location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      if (localStorage.getItem('Tokens') != null)
      return true;
      this.router.navigate(['/login']);
      return false;
  }
}
}
