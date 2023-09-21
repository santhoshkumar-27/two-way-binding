import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coordinate } from '../models/coordinate';

@Component({
  selector: 'app-coordinate-editor',
  templateUrl: './coordinate-editor.component.html',
  styleUrls: ['./coordinate-editor.component.css']
})
export class CoordinateEditorComponent implements OnInit {
  // https://angular.io/guide/two-way-binding#how-two-way-binding-works
  @Input()
  coordinate = new Coordinate();

  @Output()
  coordinateChange = new EventEmitter<Coordinate>();

  constructor() { }

  ngOnInit(): void {
  }

  onReset(): void{
    this.coordinate = new Coordinate();
    this.coordinateChange.emit(this.coordinate);
  }
}
