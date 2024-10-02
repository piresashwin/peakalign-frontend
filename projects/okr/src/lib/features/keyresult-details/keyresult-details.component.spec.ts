import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyresultDetailsComponent } from './keyresult-details.component';

describe('KeyresultDetailsComponent', () => {
  let component: KeyresultDetailsComponent;
  let fixture: ComponentFixture<KeyresultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyresultDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyresultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
