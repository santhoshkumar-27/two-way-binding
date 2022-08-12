import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateEditorComponent } from './coordinate-editor.component';

describe('CoordinateEditorComponent', () => {
  let component: CoordinateEditorComponent;
  let fixture: ComponentFixture<CoordinateEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
