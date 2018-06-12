import { TestBed, inject } from '@angular/core/testing';

import { ApiDataService } from './api-data.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDataService]
    });
  });

  it('should be created', inject([ApiDataService], (service: ApiDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should set the homedata observables', inject([ApiDataService], (service: ApiDataService) => {
    service.loadHomeData(10,11,12);

    service.homeData.subscribe(x => {
      expect(x.BudgetBalance).toBe(10);
      expect(x.ExpenseBalance).toBe(11);
      expect(x.SavingsBalance).toBe(12);
    });

  }));
});
