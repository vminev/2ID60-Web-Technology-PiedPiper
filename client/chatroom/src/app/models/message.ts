import {UserProfile} from "./userprofile";

export class Message {
  content: string;
  creator: UserProfile;
  date_posted: Date;
}
