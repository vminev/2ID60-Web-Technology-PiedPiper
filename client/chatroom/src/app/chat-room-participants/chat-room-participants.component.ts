import { Component } from '@angular/core'

@Component({
  selector: 'app-chat-room-participants',
  templateUrl: './chat-room-participants.component.html',
  styleUrls: ['./chat-room-participants.component.css']
})

export class ChatRoomParticipantsComponent {
  profileImage: string;
  profileName: string;
  inChat: boolean;

  constructor(){

  }

  ngOnInit(profileImage, profileName, inChat){
    this.profileImage = profileImage;
    this.profileName = profileName;
    this.inChat = inChat;
  }

  ngOnChanges() {

  }

  leaveChat(){

  }
}
