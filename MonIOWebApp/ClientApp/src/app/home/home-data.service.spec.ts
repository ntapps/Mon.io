import { TestBed, inject } from '@angular/core/testing';

import { HomeDataService } from './home-data.service';

describe('HomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeDataService]
    });
  });

  it('should be created', inject([HomeDataService], (service: HomeDataService) => {
    expect(service).toBeTruthy();
  }));
});
