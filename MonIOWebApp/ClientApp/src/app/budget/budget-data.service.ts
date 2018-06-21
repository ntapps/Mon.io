import { Injectable } from '@angular/core';
import { MockApiDataService } from 'src/app/mock-services/mock-api-data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Budget} from 'src/app/models/Budget';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BudgetDataService {
  budgetData: Budget;
  _budgetData: BehaviorSubject<Budget>;
  constructor(private apiData : MockApiDataService) { 
    this.apiData.budgetViewData.subscribe(data => {
      console.log(data);
      if(data !== null || data !== undefined){
        this.budgetData = data;
        this._budgetData = new BehaviorSubject<Budget>(data);
      }else{
        this.budgetData = new Budget;
        this._budgetData = new BehaviorSubject<Budget>(new Budget);
      }
      
    });
  }

  getAllBudgetData():Observable<Budget>{
    return this._budgetData.asObservable();
  }

}
