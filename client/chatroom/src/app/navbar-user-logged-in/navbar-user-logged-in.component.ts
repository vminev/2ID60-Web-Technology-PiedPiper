import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-user-logged-in',
  templateUrl: './navbar-user-logged-in.component.html',
  styleUrls: ['./navbar-user-logged-in.component.css']
})
export class NavbarUserLoggedInComponent implements OnInit {
  ourApp: string;
  home: string;
  myProfile: string;
  login: string;
  register: string;
  create: string;

  @Input()
  user: string = null;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(){
    this.ourApp = 'ChatGo';
    this.home = 'Home';
    this.myProfile = 'My Profile';
    this.login = 'Log In';
    this.register = 'Register';
    this.create = 'Create room';
  }

  userChange(event) {
    this.change.emit(event);
  }

  ngOnInit() {
  }

}
