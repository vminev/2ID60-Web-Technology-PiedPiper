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
}
