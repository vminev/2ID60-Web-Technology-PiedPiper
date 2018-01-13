import { Component } from '@angular/core'

@Component(
  {
    selector: 'app-button',
    templateUrl: '../viewsHTML/joinEnterButton/joinEnterButton.component.html',
    styleUrls: ['../viewsCSS/joinEnterButton/joinEnterButton.component.css']
  }
)

export class PushDownButton {
  title: string;
  text: string;

  constructor(){
    this.title = 'Do I work';
    this.text = 'Click Me'
  }
}
