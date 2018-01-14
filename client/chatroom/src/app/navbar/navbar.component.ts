import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
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
