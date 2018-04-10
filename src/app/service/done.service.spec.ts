import { TestBed, inject } from '@angular/core/testing';

import { DoneService } from './done.service';

describe('DoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoneService]
    });
  });

  it('should be created', inject([DoneService], (service: DoneService) => {
    expect(service).toBeTruthy();
  }));
});
