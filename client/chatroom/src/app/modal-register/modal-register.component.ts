import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-register',
  templateUrl: 'modal-register.component.html',
  styleUrls: ['modal-register.component.css']
})

export class ModalRegisterComponent {

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
