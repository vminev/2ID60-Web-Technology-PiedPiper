import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-profile-personal',
  templateUrl: './modal-profile-personal.component.html',
  styleUrls: ['./modal-profile-personal.component.css']
})

export class ModalProfilePersonalComponent {
    public profilePic;
    public userName: string;
    public age: string;
    public description: string;
    public gender: string;

    constructor(userName){
      this.userName = userName;
    }

    ngOnChange(profilePic, age, gender, description) {
      this.profilePic = profilePic;
      this.age= age;
      this.gender = gender;
      this.description = description;
    }
}
