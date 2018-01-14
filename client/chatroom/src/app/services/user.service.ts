import {Injectable} from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {settings} from '../config';

@Injectable()
export class UserService {
  private loginUrl = `${settings.apiUrl}/login`;

  constructor(private http: HttpClient) { }

  login(): Observable<string> {
    return this.http.post()
  }

}
