import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPlumbCanvasComponent } from './js-plumb-canvas.component';

describe('JsPlumbCanvasComponent', () => {
  let component: JsPlumbCanvasComponent;
  let fixture: ComponentFixture<JsPlumbCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsPlumbCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsPlumbCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
