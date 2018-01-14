import { Component } from '@angular/core'

@Component(
  {
    selector: 'app-join-enter-button',
    templateUrl: './join-enter-button.component.html',
    styleUrls: ['./join-enter-button.component.css']
  }
)

export class JoinEnterButtonComponent {
  title: string;
  text: string;

  constructor(){
    this.title = 'Do I work';
    this.text = 'Click Me'
  }

  joinOrEnter(text){
    if(text === "Join"){
      //call function to join chat in array for participants and then enter by alco calling the route for chat-room
    } else {
      //call function to enter the chat room and route to show it
    }
  }
}
