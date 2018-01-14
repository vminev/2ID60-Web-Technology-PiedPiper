import {Injectable} from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Message} from "../models/message";
import {settings} from '../config';

@Injectable()
export class MessageService {
  private messagesHttpUrl = `${settings.apiUrl}/chatroom/1/messages`;
  private messagesWsUrl = `${settings.wsUrl}/chatroom/`;

  constructor(private http: HttpClient) {}

  getMessages(room_id): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesHttpUrl);
  }

  sendMessage(socket: WebSocket, message: Message): void {
    socket.send(message);
  }

  openSocket(): Observable<WebSocket> {
    let socket =  new WebSocket(`${this.messagesWsUrl}?token=`);

    return of(socket);
  }
}
