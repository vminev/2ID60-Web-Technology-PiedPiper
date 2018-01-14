import {User} from './user';
import {Message} from './message';

export class RoomChat {
  title: string;
  admin: User;
  connected_participants: User[];
  subscribed_participants: User[];
  messages: Message[];
}
