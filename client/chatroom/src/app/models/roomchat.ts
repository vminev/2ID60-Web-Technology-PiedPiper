import {User} from './user';
import {Message} from './message';
import {UserProfile} from "./userprofile";

export class RoomChat {
  title: string;
  admin: UserProfile;
  participants: number;
  messages: Message[];
  id: number;
  can_enter: boolean;

  constructor(title: string) {
    this.title = title;
  }
}
