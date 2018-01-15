import { Component, OnInit } from '@angular/core';
import {ChatroomService} from "../services/chatroom.service";
import {RoomChat} from "../models/roomchat";
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-create-chatroom',
  templateUrl: './modal-create-chatroom.component.html',
  styleUrls: ['./modal-create-chatroom.component.css']
})
export class ModalCreateChatroomComponent implements OnInit {

  constructor(private chatroomService: ChatroomService, private location: Location) { }

  ngOnInit() {
  }

  createChatRoom(title: string) {
    this.chatroomService.create(new RoomChat(title))
      .subscribe(
        () => window.location.reload(),
        error => console.log(error)
      );
  }

}
