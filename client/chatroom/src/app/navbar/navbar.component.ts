import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  @Input()
  user: string;

  @Output()
  userChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  userChanged(event) {
    this.userChange.emit(event);
  }
}
