import { TestBed } from '@angular/core/testing';
import { OKRService } from './services/o-kR.service';
import { RestService } from '@abp/ng.core';

describe('OKRService', () => {
  let service: OKRService;
  const mockRestService = jasmine.createSpyObj('RestService', ['request']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RestService,
          useValue: mockRestService,
        },
      ],
    });
    service = TestBed.inject(OKRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
