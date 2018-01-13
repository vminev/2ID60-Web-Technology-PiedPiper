import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: '../viewsHTML/navbar/navbar.component.html',
  styleUrls: ['../viewsCSS/navbar/navbar.component.css']
})

export class Navbar {
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;

  constructor(){
    this.test1 = 'DO';
    this.test2 = 'I';
    this.test3 = 'FUCKING';
    this.test4 = 'WORK';
    this.test5 = 'MOTHAFUCKA';
  }
}
