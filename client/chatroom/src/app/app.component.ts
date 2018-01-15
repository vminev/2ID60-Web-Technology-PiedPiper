import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: string = null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.isLoggedIn()
      .subscribe(
        (isLoggedIn) => {
          if (isLoggedIn) {
            this.userService.getIdentity()
              .subscribe(
                identity => this.user = identity.username,
                error => {
                  console.log(error);
                  this.user = null
                }
              )
          }
        }
      )
  }

  userChanged(event) {
    this.user = event;
  }
}
