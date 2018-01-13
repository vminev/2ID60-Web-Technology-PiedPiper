import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PushDownButton} from './componentsTS/joinEnterButton/joinEnterButton.component';
import {Navbar} from "./componentsTS/navbar/navbar.component";
import {ChatRoom} from "./componentsTS/chatRoom/chatRoom.component";
import {MessageBubbleOthers} from "./componentsTS/messageBubbleOthers/messageBubbleOthers.component";
import {MessageBubblePersonal} from "./componentsTS/messageBubblePersonal/messageBubblePersonal.component";
import {ModalLogin} from "./componentsTS/modalLogin/modalLogin.component";
import {ModalProfileOthers} from "./componentsTS/modalProfileOthers/modalProfileOthers.component";
import {ModalProfilePersonal} from "./componentsTS/modalProfilePersonal/modalProfilePersonal.component";
import {ModalRegister} from "./componentsTS/modalRegister/modalRegister.component";
import {ChatRoomChatBox} from "./componentsTS/chatRoomChatBox/chatRoomChatBox.component";
import {ChatRoomList} from "./componentsTS/chatRoomList/chatRoomList.component";
import {ChatRoomParticipants} from "./componentsTS/chatRoomParticipants/chatRoomParticipants.component";

@NgModule({
  declarations: [
    AppComponent,
    PushDownButton,
    Navbar,
    ChatRoom,
    ChatRoomChatBox,
    ChatRoomList,
    ChatRoomParticipants,
    MessageBubbleOthers,
    MessageBubblePersonal,
    ModalLogin,
    ModalProfileOthers,
    ModalProfilePersonal,
    ModalRegister
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
