import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-profile-personal',
  templateUrl: './modal-profile-personal.component.html',
  styleUrls: ['./modal-profile-personal.component.css']
})

export class ModalProfilePersonalComponent {
    public profilePic: any;
    public userName: string;
    public age: string;
    public descrip: string;
    public gender: string;

    constructor(){

    }

    ngOnInit(userName){
      this.userName = userName;
    }

    ngOnChange(profilePic, age, gender, descrip) {

      this.profilePic = profilePic;
      this.age= age;
      this.gender = gender;
      this.descrip = descrip;
    }
}
