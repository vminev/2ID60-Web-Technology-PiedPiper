import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import {ChatRoomListComponent} from "./chat-room-list/chat-room-list.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'chat/:id', component: ChatRoomComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/chatRoomsList', pathMatch: 'full' },
  { path: 'chatRoomsList', component: ChatRoomListComponent },
  { path: '**', redirectTo: '/chatRoomsList' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
