import { TestBed, inject } from '@angular/core/testing';

import { HomeDataService } from './home-data.service';
import { ApiDataService} from '../shared-data/api-data.service';


describe('HomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeDataService]
    });
  });

  it('should be created', inject([HomeDataService], (service: HomeDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get values from dataService', inject([HomeDataService, ApiDataService], 
    (service: HomeDataService, apiService:ApiDataService) => {
      apiService.loadHomeData(10, 11, 12);
      service.GetBudgets().subscribe( x=>
        expect(x).toBe(10)
      );
      service.GetExpenses().subscribe( x=>
        expect(x).toBe(11)
      );
      service.GetSavings().subscribe( x=>
        expect(x).toBe(12)
      );
    }));
});
