import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Membership} from "../models/membership";
import {settings} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MembershipService {
  private membershipUrl = `${settings.apiUrl}/membership`;

  constructor(private http: HttpClient) { }

  getMemberships(): Observable<Membership[]> {
    return this.http.get<Membership[]>(this.membershipUrl);
  }

}
