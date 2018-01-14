import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})

export class ChatRoomComponent {
  profileImage: string;
  profileName: string;
  inChat: boolean;

  constructor() {
  }
}
