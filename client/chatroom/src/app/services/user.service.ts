import {Injectable} from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {settings} from '../config';
import {User} from "../models/user";

@Injectable()
export class UserService {
  private loginUrl = `${settings.apiUrl}/user/login`;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<string> {
    return this.http.post(this.loginUrl, user);
  }
}
