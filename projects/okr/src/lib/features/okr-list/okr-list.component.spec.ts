import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrListComponent } from './okr-list.component';

describe('OkrListComponent', () => {
  let component: OkrListComponent;
  let fixture: ComponentFixture<OkrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OkrListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
