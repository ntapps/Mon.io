import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _isAuthenticated : BehaviorSubject<boolean>;
  token : string = "IhaventlookedintogoogleauthsoIdontknowwhatweneed";
  userId : number;
  constructor() { 
    this.userId = 4;
    this._isAuthenticated = new BehaviorSubject<boolean>(true);
  }




  //TEMPORARY FUNCTIONS TO MIMIC SHARED SERVICES.
  //IF THERES NO OBSERVABLES BELOW HERE WHEN YOU FIND IT, TELL ANDREW
  //HES BAD AT HIS JOB

  get isAuthenticated(){
    return this._isAuthenticated.asObservable();
  }

  logOut(){
    this._isAuthenticated.next(false);
    console.log("service set login to false");
  }

  logIn(){
    this._isAuthenticated.next(true);
    console.log("service set login to true");
  }

  tryLogin(user:string, password:string) : string{
    return "It probably doesn't work this way because OAuth";
  }

  getUserId() : number{
    return this.userId;
  }




  
}
