import { Injectable } from '@angular/core';
import { ApiDataService } from 'src/app/shared-data/api-data.service';
import { HomeData } from 'src/app/models/HomeData';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  homeData : HomeData;

  _budget : BehaviorSubject<number>;
  _expense : BehaviorSubject<number>;
  _savings : BehaviorSubject<number>;

  constructor(private apiData : ApiDataService) { 
    this._budget = new BehaviorSubject<number>(0);
    this._expense = new BehaviorSubject<number>(0);
    this._savings = new BehaviorSubject<number>(0);

    this.apiData.homeData.subscribe(data => {
      this.homeData = data;
      this._budget.next(this.homeData.BudgetBalance);
      this._expense.next(this.homeData.ExpenseBalance);
      this._savings.next(this.homeData.SavingsBalance);
    });
  }


  GetAnyNumber(){
    return this.apiData.GetAnyNumber();
  }

  GetBudgets() : Observable<number>{
    return this._budget.asObservable();
  }

  GetExpenses() : Observable<number>{
    return this._expense.asObservable();
  }

  GetSavings() : Observable<number>{
    return this._savings.asObservable();
  }

}
