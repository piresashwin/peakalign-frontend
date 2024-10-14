import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSessionModalComponent } from './create-session-modal.component';

describe('CreateSessionModalComponent', () => {
  let component: CreateSessionModalComponent;
  let fixture: ComponentFixture<CreateSessionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSessionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSessionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
