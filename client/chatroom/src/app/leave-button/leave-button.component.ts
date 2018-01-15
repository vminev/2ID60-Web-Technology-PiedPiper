import { Component } from '@angular/core';
import {MembershipService} from "../services/membership.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-leave-button',
  templateUrl: './leave-button.component.html',
  styleUrls: ['./leave-button.component.css']
})
export class LeaveButtonComponent {
  constructor(private membershipService: MembershipService, private route: ActivatedRoute, private router: Router){}

  leave() {
    this.route.params.subscribe(params => {
      let room_id = +params['id'];

      this.membershipService.deleteMemembership(room_id)
        .subscribe(
          () => this.router.navigate(['/']),
          error => console.log(error)
        );
    });
  }

}
