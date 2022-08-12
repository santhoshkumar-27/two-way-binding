import { Component } from '@angular/core';
import { Spaceship } from './models/spaceship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Two Way Binding';
  spaceship = new Spaceship('USS Enterprise');  
}
