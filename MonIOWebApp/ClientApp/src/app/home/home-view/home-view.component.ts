import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { HomeData } from 'src/app/models/HomeData';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  private budgetBalance :number;
  private expenseBalance :number;
  private savingsBalance :number;

  homeDataObject : HomeData;
  constructor(private homeDataService : HomeDataService) { 

    this.budgetBalance = 0;
    this.expenseBalance = 0;
    this.savingsBalance = 0;
  }

  ngOnInit() {
    this.homeDataService.GetBudgets().subscribe(budget => {
      this.budgetBalance = budget;
    });
    this.homeDataService.GetExpenses().subscribe(expense => {
      this.expenseBalance = expense;
    });
    this.homeDataService.GetSavings().subscribe(savings => {
      this.savingsBalance = savings;
    });
  }

}
