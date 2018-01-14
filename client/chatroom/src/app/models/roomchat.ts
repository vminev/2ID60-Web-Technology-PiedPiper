import {User} from 'user.ts';
import {Message} from "./message";

export class RoomChat {
  title: string;
  admin: User;
  connected_participants: User[];
  subscribed_participants: User[];
  messages: Message[];
}
