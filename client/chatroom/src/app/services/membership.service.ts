import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Membership} from "../models/membership";
import {settings} from "../config";
import {HttpClient} from "@angular/common/http";
import {HeaderService} from "./header.service";

@Injectable()
export class MembershipService {
  private membershipUrl = `${settings.apiUrl}/membership`;

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  getMemberships(): Observable<Membership[]> {
    let headers = this.headerService.getHeaders();
    return this.http.get<Membership[]>(this.membershipUrl, {headers: headers});
  }

  createMembership(membership: Membership): Observable<Object> {
    let headers = this.headerService.getHeaders();
    return this.http.post<Object>(this.membershipUrl + '/create', membership, {headers: headers});
  }

  deleteMemembership(room_id: number): Observable<Object> {
    let headers = this.headerService.getHeaders();
    return this.http.delete<Object>(this.membershipUrl + '/' + room_id + '/delete', {headers: headers});
  }
}
