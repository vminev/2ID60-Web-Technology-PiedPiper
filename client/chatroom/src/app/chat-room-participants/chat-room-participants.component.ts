import {Component, Input} from '@angular/core'
import {ChatroomService} from "../services/chatroom.service";
import {RoomChat} from "../models/roomchat";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chat-room-participants',
  templateUrl: './chat-room-participants.component.html',
  styleUrls: ['./chat-room-participants.component.css']
})

export class ChatRoomParticipantsComponent {
  @Input()
  roomchat: RoomChat;

  constructor(){}
}
