import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-button',
  templateUrl: './leave-button.component.html',
  styleUrls: ['./leave-button.component.css']
})
export class LeaveButtonComponent implements OnInit {
  text: string;

  constructor(){
    this.text = 'Leave'
  }

  leaveChat() {
    //remove user from participants in current chat. Hence set join-enter button text to join
  }

  ngOnInit() {

  }

}
