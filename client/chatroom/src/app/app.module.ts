import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {ChatRoomChatBoxComponent} from './chat-room-chat-box/chat-room-chat-box.component';
import {ChatRoomListComponent} from './chat-room-list/chat-room-list.component';
import {ChatRoomParticipantsComponent} from './chat-room-participants/chat-room-participants.component';
import {JoinEnterButtonComponent} from './join-enter-button/join-enter-button.component';
import {MessageBubbleOthersComponent} from './message-bubble-others/message-bubble-others.component';
import {MessageBubblePersonalComponent} from './message-bubble-personal/message-bubble-personal.component';
import {ModalLoginComponent} from './modal-login/modal-login.component';
import {ModalProfileOthersComponent} from './modal-profile-others/modal-profile-others.component';
import {ModalProfilePersonalComponent} from './modal-profile-personal/modal-profile-personal.component';
import {ModalRegisterComponent} from './modal-register/modal-register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ChatroomService} from "./services/chatroom.service";
import {MembershipService} from "./services/membership.service";
import {MessageService} from "./services/message.service";
import {UserService} from './services/user.service';
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
import { ModalCreateChatroomComponent } from './modal-create-chatroom/modal-create-chatroom.component';
import { AppRoutingModule } from './/app-routing.module';


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
    NavbarComponent,
    ModalCreateChatroomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ChatroomService,
    MembershipService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
