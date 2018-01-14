import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})

export class ModalLoginComponent {

  constructor(){

  }

  login(username, password){
    //send values to server to login login
    this.changeNavbar(username)
  }

  changeNavbar(username){
    //change login button to username
    //change register button to logout
  }
}
