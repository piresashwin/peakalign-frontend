import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentVisualizationComponent } from './alignment-visualization.component';

describe('AlignmentVisualizationComponent', () => {
  let component: AlignmentVisualizationComponent;
  let fixture: ComponentFixture<AlignmentVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlignmentVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignmentVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
