import {Injectable} from '@angular/core';
import {settings} from "../config";
import {HttpClient} from "@angular/common/http";
import {RoomChat} from "../models/roomchat";
import {Observable} from "rxjs";
import {HeaderService} from "./header.service";

@Injectable()
export class ChatroomService {
  private chatroomUrl = `${settings.apiUrl}/chatroom`;

  constructor(private http: HttpClient, private headerService: HeaderService) {}

  getAll(): Observable<RoomChat[]> {
    let headers = this.headerService.getHeaders();
    return this.http.get<RoomChat[]>(`${this.chatroomUrl}/all`, {headers: headers});
  }

  getDetails(room_id): Observable<RoomChat> {
    let headers = this.headerService.getHeaders();
    return this.http.get<RoomChat>(`${this.chatroomUrl}/${room_id}`, {headers: headers})
  }

  create(chatroom: RoomChat): Observable<Object> {
    let headers = this.headerService.getHeaders();
    return this.http.post<Object>(`${this.chatroomUrl}/create`, chatroom, {headers: headers});
  }
}
