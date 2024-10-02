import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyresultComponent } from './create-keyresult.component';

describe('CreateKeyresultComponent', () => {
  let component: CreateKeyresultComponent;
  let fixture: ComponentFixture<CreateKeyresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateKeyresultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateKeyresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
