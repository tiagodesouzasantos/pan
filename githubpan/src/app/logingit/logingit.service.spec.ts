import { TestBed } from '@angular/core/testing';

import { LogingitService } from './logingit.service';

describe('LogingitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogingitService = TestBed.get(LogingitService);
    expect(service).toBeTruthy();
  });
});
