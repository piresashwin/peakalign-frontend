import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OKRComponent } from './components/o-kR.component';
import { OKRService } from '@peak-align/o-kR';
import { of } from 'rxjs';

describe('OKRComponent', () => {
  let component: OKRComponent;
  let fixture: ComponentFixture<OKRComponent>;
  const mockOKRService = jasmine.createSpyObj('OKRService', {
    sample: of([]),
  });
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OKRComponent],
      providers: [
        {
          provide: OKRService,
          useValue: mockOKRService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OKRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
