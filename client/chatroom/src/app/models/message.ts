import {UserProfile} from "./userprofile";

export class Message {
  content: string;
  creator: UserProfile;
  date_posted: Date;

  constructor(content: string, date_posted: Date, creator: UserProfile) {
    this.content = content;
    this.date_posted = date_posted;
    this.creator = creator;
  }
}
