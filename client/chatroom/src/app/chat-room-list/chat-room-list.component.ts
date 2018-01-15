import {Component} from '@angular/core'
import {RoomChat} from "../models/roomchat";
import {ChatroomService} from "../services/chatroom.service";

@Component({
  selector: 'app-chat-room-list',
  templateUrl: './chat-room-list.component.html',
  styleUrls: ['./chat-room-list.component.css']
})

export class ChatRoomListComponent {
  chatrooms: RoomChat[];

  constructor(private chatroomService: ChatroomService) {

  }

  ngOnInit() {
    this.chatroomService.getAll()
      .subscribe(chatrooms => {
        this.chatrooms = chatrooms
      })
  };
}
