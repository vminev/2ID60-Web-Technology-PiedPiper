import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class HeaderService {

  constructor(private cookieService: CookieService) { }

  getHeaders(): HttpHeaders {
    let token = this.cookieService.get('auth');

    return new HttpHeaders().set('Authorization', `JWT ${token}`);
  }
}
