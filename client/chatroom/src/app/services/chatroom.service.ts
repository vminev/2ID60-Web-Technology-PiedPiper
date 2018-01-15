import { Injectable } from '@angular/core';
import {settings} from "../config";
import {HttpClient} from "@angular/common/http";
import {RoomChat} from "../models/roomchat";
import {Observable} from "rxjs";

@Injectable()
export class ChatroomService {
  private chatroomUrl = `${settings.apiUrl}/chatroom`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<RoomChat[]> {
    return this.http.get<RoomChat[]>(`${this.chatroomUrl}/all`);
  }

  getDetails(room_id): Observable<RoomChat> {
    return this.http.get<RoomChat>(`${this.chatroomUrl}/${room_id}`)
  }
}
