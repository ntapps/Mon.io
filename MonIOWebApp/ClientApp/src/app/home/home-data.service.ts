import { Injectable } from '@angular/core';
import { ApiDataService } from 'src/app/shared-data/api-data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(private apiData : ApiDataService) { }

  GetAnyNumber(){
    return this.apiData.GetAnyNumber();
  }

}
