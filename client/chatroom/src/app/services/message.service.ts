import {Injectable} from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Message} from "../models/message";
import {settings} from '../config';
import {UserService} from "./user.service";

@Injectable()
export class MessageService {
  private messagesHttpUrl = `${settings.apiUrl}/chatroom/`;
  private messagesWsUrl = `${settings.wsUrl}/chatroom/`;

  constructor(private http: HttpClient, private userService: UserService) {}

  getMessages(room_id): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.messagesHttpUrl}${room_id}/messages`);
  }

  sendMessage(socket: WebSocket, message: Message): void {
    socket.send(message);
  }
}
