import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Message} from "../models/message";
import {settings} from '../config';
import {HeaderService} from "./header.service";

@Injectable()
export class MessageService {
  private messagesHttpUrl = `${settings.apiUrl}/chatroom/`;

  constructor(private http: HttpClient, private headerService: HeaderService) {}

  getMessages(room_id): Observable<Message[]> {
    let headers = this.headerService.getHeaders();
    return this.http.get<Message[]>(`${this.messagesHttpUrl}${room_id}/messages`, {headers: headers});
  }
}
