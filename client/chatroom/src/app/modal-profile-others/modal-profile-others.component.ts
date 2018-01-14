import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-profile-others',
  templateUrl: './modal-profile-others.component.html',
  styleUrls: ['./modal-profile-others.component.css']
})

export class ModalProfileOthersComponent {
  public profilePic;
  public userName: string;
  public age: string;
  public description: string;
  public gender: string;

  constructor(){

  }

  ngOnInit(profilePic, userName, age, description, gender) {
    this.profilePic = profilePic;
    this.userName = userName;
    this.age = age;
    this.description = description;
    this.gender = gender;
  }
}
