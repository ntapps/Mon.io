import { Injectable } from '@angular/core';
import { HomeData } from '../models/HomeData';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Budget } from 'src/app/models/Budget';
import { MockBudget } from './mock-budget-model';
//Service to fetch API data and disperse it to the relevant views
@Injectable({
  providedIn: 'root'
})
export class MockApiDataService {

  constructor() {
    this.dataStore = {
      homeData: new HomeData(0,0,0),
      budget: null
    };
    this._homeData = new BehaviorSubject<HomeData>(this.dataStore.homeData);
    this._budget = new BehaviorSubject<Budget>(new Budget);

    
    //call fetches on our dataStore objects
    //(when we get an API)
    //test purposes only. Remove when service is created.
    setTimeout(() => {this.loadHomeData(100, 100, 100)}, 2000);
    setTimeout(() => {this.loadMockBudgetData()}, 2000);
  }

  //instantiate our observables here
  private _homeData: BehaviorSubject<HomeData>;
  private _budget: BehaviorSubject<Budget>;
  //store our model's data here to compare from api calls 
  //and check for changes
  private dataStore: {
    homeData : HomeData;
    budget: any;
  }

  loadHomeData(b:number, e:number, s:number){
    this.dataStore.homeData = new HomeData(b,e,s);
    this._homeData.next(Object.assign({}, this.dataStore).homeData);
  }

  loadMockBudgetData(){
    this.dataStore.budget = MockBudget;
    this._budget.next(Object.assign({}, this.dataStore).budget);
  }
  get homeData() {
    return this._homeData.asObservable();
  }

  get budgetViewData(){
    return this._budget.asObservable();
  }
}
