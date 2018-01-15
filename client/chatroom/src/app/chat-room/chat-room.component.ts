import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {ChatroomService} from "../services/chatroom.service";
import {RoomChat} from "../models/roomchat";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})

export class ChatRoomComponent {
  roomchat: RoomChat;

  constructor(
    private chatroomService: ChatroomService, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.loadRoomChat();
  }

  loadRoomChat() {
    this.route.params.subscribe(params => {
      let room_id = +params['id'];

      this.chatroomService.getDetails(room_id)
        .subscribe(
          roomchat => this.roomchat = roomchat,
          error => console.log(error)
        )
    });
  }

  userChanged(event) {
    this.loadRoomChat();
  }
}
