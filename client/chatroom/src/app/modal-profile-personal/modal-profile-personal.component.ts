import { Component } from '@angular/core'
import {UserProfile} from "../models/userprofile";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-modal-profile-personal',
  templateUrl: './modal-profile-personal.component.html',
  styleUrls: ['./modal-profile-personal.component.css']
})

export class ModalProfilePersonalComponent {
    private profile: UserProfile;
    private userId: number;

    constructor(private userService: UserService){

    }

    ngOnInit(){
      this.userService.getIdentity()
        .subscribe(
          identity => {
            let id = identity.id;
            this.userId = id;

            this.userService.getProfile(id)
              .subscribe(
                profile => this.profile = profile
              )
          },
          error => console.log(error)
        );
    }

    save() {
      this.userService.updateProfile(this.userId, this.profile)
        .subscribe(

        )
    }
}
