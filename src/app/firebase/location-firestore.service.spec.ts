import { TestBed } from '@angular/core/testing';

import { LocationFirestoreService } from './location-firestore.service';

describe('LocationFirestoreService', () => {
  let service: LocationFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
