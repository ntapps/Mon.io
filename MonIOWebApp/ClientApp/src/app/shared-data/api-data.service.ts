import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor() { }


  GetAnyNumber():number{
    return Math.floor( Math.random() * 1000 );
  }
}
