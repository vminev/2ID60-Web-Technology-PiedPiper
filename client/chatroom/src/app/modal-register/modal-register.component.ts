import {Component, Input, Output, EventEmitter} from '@angular/core'
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-modal-register',
  templateUrl: 'modal-register.component.html',
  styleUrls: ['modal-register.component.css']
})

export class ModalRegisterComponent {
  @Input()
  user: string;

  @Output()
  userChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private userService: UserService) {}

  register(username, password) {
    this.userService.register(new User(username, password))
      .subscribe(
        response => this.userService.login(new User(username, password))
          .subscribe(
            data => this.userService.setToken(data.token),
            error => console.log(error),
            () => this.userChange.emit(username)),
        error => console.log(error),
        () => {this.userChange.emit(username); $('#modalRegister').trigger('click')}
      );
  }
}
