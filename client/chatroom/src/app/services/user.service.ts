import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {settings} from '../config';
import {User} from "../models/user";
import {CookieService} from 'ngx-cookie-service';
import {Login} from "../models/login";
import {HeaderService} from "./header.service";
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  private profileUrl = `${settings.apiUrl}/profile`;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private headerService: HeaderService,
              private router: Router) {
  }

  login(user: User): Observable<Login> {
    let headers = this.headerService.getHeaders();
    return this.http.post<Login>(this.profileUrl + '/login', user, {headers: headers});
  }

  register(user: User): Observable<Object> {
    let headers = this.headerService.getHeaders();
    return this.http.post<Object>(this.profileUrl + '/register', user, {headers: headers});
  }

  setToken(token: string): void {
    this.cookieService.set('auth', token);
  }

  getToken(): Observable<string> {
    return of(this.cookieService.get('auth'));
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.cookieService.check('auth'));
  }

  logout(): void {
    this.cookieService.delete('auth');
    this.router.navigateByUrl('/');
  }

  getIdentity(): Observable<User> {
    let headers = this.headerService.getHeaders();
    return this.http.get<User>(this.profileUrl + '/identity', {headers: headers});
  }
}
