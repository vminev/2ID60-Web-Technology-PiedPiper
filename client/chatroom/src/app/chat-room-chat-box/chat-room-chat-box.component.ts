import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../services/message.service";
import {Message} from "../models/message";
import {UserService} from "../services/user.service";
import {settings} from "../config";
import {UserProfile} from "../models/userprofile";

@Component({
  selector: 'app-chat-room-chat-box',
  templateUrl: './chat-room-chat-box.component.html',
  styleUrls: ['./chat-room-chat-box.component.css']
})
export class ChatRoomChatBoxComponent implements OnInit {
  id: number;
  messages: Message[];
  socket: WebSocket;
  connected: Boolean;
  content: string = '';

  @Output()
  usersChange: EventEmitter<any> = new EventEmitter();

  constructor(private messageService: MessageService, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.connected = false;

    this.route.params.subscribe(params => {
      let room_id = +params['id'];
      this.messageService.getMessages(room_id)
        .subscribe(messages => {
          this.messages = messages;

          this.userService.getToken()
            .subscribe(token => {
              let messages = this.messages;
              let usersChange = this.usersChange;
              this.socket = new WebSocket(`${settings.wsUrl}/chatroom/${+params['id']}?token=${token}`);

              this.socket.onmessage = function (e) {
                let data = JSON.parse(e.data);
                switch (data.type) {
                  case 'message':
                    let message = new Message(data.content, data.date_posted, new UserProfile(data.first_name, data.family_name, data.profile_photo));
                    messages.push(message);
                    break;
                  case 'join':
                  case 'leave':
                    usersChange.emit(true);
                    break;
                }
              };
            });
        });
    });
  }

  submitText(text: string) {
    if (this.socket.readyState == WebSocket.OPEN) {
      this.connected = true;
    }

    if (this.connected) {
      console.log(this.content);
      this.socket.send(this.content);
      this.content = '';
    }
  }
}
