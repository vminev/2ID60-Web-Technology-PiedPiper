import {User} from './user';
import {Message} from './message';
import {UserProfile} from "./userprofile";

export class RoomChat {
  title: string;
  admin: UserProfile;
  connected_participants: User[];
  subscribed_participants: User[];
  messages: Message[];
}
