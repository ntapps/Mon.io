import { Injectable } from '@angular/core';
import { HomeData } from '../models/HomeData';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
//Service to fetch API data and disperse it to the relevant views
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor() {
    this.dataStore = {
      homeData: new HomeData(0,0,0)
    };
    this._homeData = new BehaviorSubject<HomeData>(this.dataStore.homeData)

    //call fetches on our dataStore objects
    //(when we get an API)
    setTimeout(() => {this.loadHomeData(100, 100, 100)}, 2000);
  }

  //instantiate our observables here
  private _homeData: BehaviorSubject<HomeData>;

  //store our model's data here to compare from api calls 
  //and check for changes
  private dataStore: {
    homeData : HomeData;
  }


  loadHomeData(b:number, e:number, s:number){
    this.dataStore.homeData = new HomeData(b,e,s);
    this._homeData.next(Object.assign({}, this.dataStore).homeData);
  }

  get homeData() {
    return this._homeData.asObservable();
  }

  GetAnyNumber():number{
    return Math.floor( Math.random() * 1000 );
  }


}
