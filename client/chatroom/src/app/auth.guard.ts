import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from "./services/user.service";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isLoggedIn = this.cookieService.check('auth');

    if (!isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
