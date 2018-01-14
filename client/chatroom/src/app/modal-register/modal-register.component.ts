import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-modal-register',
  templateUrl: 'modal-register.component.html',
  styleUrls: ['modal-register.component.css']
})

export class ModalRegisterComponent {
  @Input()
  user: string = '';

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(){

  }

  register(username, password) {
    //send data to services for register
    //if necessary call login
    this.changeNavbar(username)
  }

  changeNavbar(username) {
    //change login button to username
    //change register button to logout
  }
}
