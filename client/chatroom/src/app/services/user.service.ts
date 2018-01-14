import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {settings} from '../config';
import {User} from "../models/user";
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class UserService {
  private profileUrl = `${settings.apiUrl}/profile`;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(this.profileUrl + '/login', user);
  }

  setToken(token: string): void {
    this.cookieService.set('auth', token);
    this.headers.append('Authorization', 'JWT ' + token);
  }

  getToken(): Observable<string> {
    return of(this.cookieService.get('auth'));
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.cookieService.check('auth'));
  }

  logout(): void {
    this.cookieService.delete('auth');
  }
}
