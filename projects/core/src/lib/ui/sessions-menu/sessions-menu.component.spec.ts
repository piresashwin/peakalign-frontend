import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsMenuComponent } from './sessions-menu.component';

describe('SessionsMenuComponent', () => {
  let component: SessionsMenuComponent;
  let fixture: ComponentFixture<SessionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
