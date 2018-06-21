import { TestBed, inject } from '@angular/core/testing';
import { MockApiDataService } from 'src/app/mock-services/mock-api-data.service';
import { BudgetDataService } from './budget-data.service';

describe('BudgetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDataService]
    });
  });

  it('should be created', inject([BudgetDataService], (service: BudgetDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get values from dataService', inject([BudgetDataService, MockApiDataService], 
    (service: BudgetDataService, apiService:MockApiDataService) => {
      apiService.loadMockBudgetData();
      service.getAllBudgetData().subscribe(x=>{
        expect(x.id).toBe("1");
      });
    }));
});
