import {Component, Input} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {MembershipService} from "../services/membership.service";
import {Membership} from "../models/membership";

@Component(
  {
    selector: 'app-join-enter-button',
    templateUrl: './join-enter-button.component.html',
    styleUrls: ['./join-enter-button.component.css']
  }
)

export class JoinEnterButtonComponent {
  @Input()
  canEnter: boolean;

  @Input()
  chatroom_id: number;

  constructor(private route: ActivatedRoute, private membershipService: MembershipService){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let room_id = +params['id'];
    });
  }

  join(chatroom_id){
    let membership = new Membership();
    membership.chatroom = chatroom_id;
    this.membershipService.createMembership(membership)
      .subscribe(
        () => window.location.reload(),
        error => console.log(error)
      );
  }
}
