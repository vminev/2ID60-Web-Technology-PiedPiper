import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-user-annonymous',
  templateUrl: './navbar-user-annonymous.component.html',
  styleUrls: ['./navbar-user-annonymous.component.css']
})
export class NavbarUserAnnonymousComponent {
  ourApp: string;
  home: string;
  myProfile: string;
  login: string;
  register: string;
  create: string;

  constructor(){
    this.ourApp = 'ChatGo';
    this.home = 'Home';
    this.myProfile = 'My Profile';
    this.login = 'Log In';
    this.register = 'Register';
    this.create = 'Create room';
  }
}
