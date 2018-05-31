import { Injectable } from '@angular/core';
import { ApiDataService } from 'src/app/shared-data/api-data.service';
import { HomeData } from 'src/app/models/HomeData';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  homeData : HomeData;
  constructor(private apiData : ApiDataService) { 
    this.apiData.homeData.subscribe(data => {
      this.homeData = data;
    });
  }

  GetAnyNumber(){
    return this.apiData.GetAnyNumber();
  }

  GetBudgets(){
    return this.homeData.BudgetBalance;
  }

  GetExpenses(){
    return this.homeData.ExpenseBalance;
  }

  GetSavings(){
    return this.homeData.SavingsBalance;
  }



}
