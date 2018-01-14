import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
// import {DataService} from "../data.service";
// import {CommonConstants} from "../util/common-constants";

@Component({
  selector: 'app-chat-room-chat-box',
  templateUrl: './chat-room-chat-box.component.html',
  styleUrls: ['./chat-room-chat-box.component.css']
})
export class ChatRoomChatBoxComponent  implements OnInit {
  @Input() result: any;
  id: number;

  // constructor(private dataService: DataService, private route: ActivatedRoute) {
  // }

  ngOnInit() {
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
