import {Component, OnInit} from '@angular/core'
import {MessageService} from '../services/message.service';
import {Message} from "../models/message";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})

export class ChatRoomComponent {
  profileImage: string;
  profileName: string;
  inChat: boolean;
  messages: Message;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessages(1)
      .subscribe(messages => this.messages = messages, error => console.log(error), () => console.log(this.messages));
  }
}
