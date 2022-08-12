import { Component, Input, OnInit } from '@angular/core';
import { Spaceship } from '../models/spaceship';

@Component({
  selector: 'app-spaceship-editor',
  templateUrl: './spaceship-editor.component.html',
  styleUrls: ['./spaceship-editor.component.css']
})
export class SpaceshipEditorComponent implements OnInit {

  spaceship = new Spaceship('USS Enterprise', 5, 2, -7);

  constructor() { }

  ngOnInit(): void {
  }

}
