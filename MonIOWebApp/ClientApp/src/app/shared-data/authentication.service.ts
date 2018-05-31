import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  isAuthenticated : boolean;
  token : string = "IhaventlookedintogoogleauthsoIdontknowwhatweneed";
  userId : number;
  constructor() { 
    this.isAuthenticated = true;
    this.userId = 4;
  }



  //TEMPORARY FUNCTIONS TO MIMIC SHARED SERVICES.
  //IF THERES NO OBSERVABLES BELOW HERE WHEN YOU FIND IT, TELL ANDREW
  //HES BAD AT HIS JOB
  checkAuth(){
    return this.isAuthenticated;
  }

  logOut(){
    this.isAuthenticated = false;
  }

  tryLogin(user:string, password:string) : string{
    return "It probably doesn't work this way because OAuth";
  }

  getUserId() : number{
    return this.userId;
  }




  
}
