import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "../services/message.service";
import {Message} from "../models/message";
// import {DataService} from "../data.service";
// import {CommonConstants} from "../util/common-constants";

@Component({
  selector: 'app-chat-room-chat-box',
  templateUrl: './chat-room-chat-box.component.html',
  styleUrls: ['./chat-room-chat-box.component.css']
})
export class ChatRoomChatBoxComponent implements OnInit {
  id: number;
  messages: Message[];
  date = Date;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let room_id = +params['id'];
      this.messageService.getMessages(room_id)
        .subscribe(messages => {this.messages = messages})
    });
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    //
    // this.dataService.get(`${CommonConstants.baseUrl}${CommonConstants.commentUrl}${this.id}/`)
    //   .subscribe(data => {
    //       this.result = data;
    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log('Client-Side Error occurred');
    //       } else {
    //         console.log('Server-Side Error occurred');
    //       }
    //     }
    //   )
  }
}
