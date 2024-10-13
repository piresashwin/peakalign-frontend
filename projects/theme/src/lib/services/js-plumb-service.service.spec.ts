import { TestBed } from '@angular/core/testing';

import { JsPlumbServiceService } from './js-plumb-service.service';

describe('JsPlumbServiceService', () => {
  let service: JsPlumbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsPlumbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
