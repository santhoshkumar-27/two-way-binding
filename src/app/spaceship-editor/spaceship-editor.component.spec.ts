import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipEditorComponent } from './spaceship-editor.component';

describe('SpaceshipEditorComponent', () => {
  let component: SpaceshipEditorComponent;
  let fixture: ComponentFixture<SpaceshipEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceshipEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceshipEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
