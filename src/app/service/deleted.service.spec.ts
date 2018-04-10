import { TestBed, inject } from '@angular/core/testing';

import { DeletedService } from './deleted.service';

describe('DeletedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletedService]
    });
  });

  it('should be created', inject([DeletedService], (service: DeletedService) => {
    expect(service).toBeTruthy();
  }));
});
