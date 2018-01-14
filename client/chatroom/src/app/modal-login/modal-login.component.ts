import {Component, Input, Output, EventEmitter} from '@angular/core'
import {UserService} from '../services/user.service'
import {User} from '../models/user'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})

export class ModalLoginComponent {
  @Input()
  user: string = '';

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();


  constructor(private userService: UserService) {

  }

  login(username, password) {
    this.userService.login(new User(username, password))
      .subscribe(
        token => this.userService.setToken(token),
        error => console.log(error),
        () => this.change.emit(username));
  }
}
