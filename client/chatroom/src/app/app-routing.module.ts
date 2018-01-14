import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import {ChatRoomListComponent} from "./chat-room-list/chat-room-list.component";

const routes: Routes = [
  { path: '/chat/:id', component: ChatRoomComponent },
  { path: '', redirectTo: '/chatRoomsList', pathMatch: 'full' },
  { path: '/chatRoomsList', component: ChatRoomListComponent},
  { path: 'chat/:id', component: ChatRoomComponent },
  { path: '', redirectTo: '/chatRoomsList', pathMatch: 'full' },
  { path: 'chatRoomsList', component: ChatRoomListComponent },
  { path: 'chat', component: ChatRoomComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
