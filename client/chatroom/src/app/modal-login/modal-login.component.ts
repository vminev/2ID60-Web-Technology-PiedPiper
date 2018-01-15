import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})

export class ModalLoginComponent {
  @Input()
  user: string;

  @Output()
  userChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private userService: UserService) {}

  login(username, password) {
    this.userService.login(new User(username, password))
      .subscribe(
        data => this.userService.setToken(data.token),
        error => console.log(error),
        () => {this.userChange.emit(username); $('#modalLogin').trigger('click'); window.location.reload();});
  }
}
