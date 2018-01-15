import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-navbar-user-logged-in',
  templateUrl: './navbar-user-logged-in.component.html',
  styleUrls: ['./navbar-user-logged-in.component.css']
})
export class NavbarUserLoggedInComponent {
  ourApp: string;
  home: string;
  myProfile: string;
  login: string;
  register: string;
  create: string;

  @Input()
  user: string = null;

  @Output()
  userChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private userService: UserService){
    this.ourApp = 'ChatGo';
    this.home = 'Home';
    this.myProfile = 'My Profile';
    this.login = 'Log In';
    this.register = 'Register';
    this.create = 'Create room';
  }

  userChanged(event) {
    this.userChange.emit(event);
  }

  logout() {
    this.userService.logout();
    this.userChanged(null);
  }

}
