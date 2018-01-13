import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatRoomChatBoxComponent } from './chat-room-chat-box/chat-room-chat-box.component';
import { ChatRoomListComponent } from './chat-room-list/chat-room-list.component';
import { ChatRoomParticipantsComponent } from './chat-room-participants/chat-room-participants.component';
import { JoinEnterButtonComponent } from './join-enter-button/join-enter-button.component';
import { MessageBubbleOthersComponent } from './message-bubble-others/message-bubble-others.component';
import { MessageBubblePersonalComponent } from './message-bubble-personal/message-bubble-personal.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalProfileOthersComponent } from './modal-profile-others/modal-profile-others.component';
import { ModalProfilePersonalComponent } from './modal-profile-personal/modal-profile-personal.component';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    ChatRoomChatBoxComponent,
    ChatRoomListComponent,
    ChatRoomParticipantsComponent,
    JoinEnterButtonComponent,
    MessageBubbleOthersComponent,
    MessageBubblePersonalComponent,
    ModalLoginComponent,
    ModalProfileOthersComponent,
    ModalProfilePersonalComponent,
    ModalRegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
