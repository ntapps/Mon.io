import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  private budgetBalance;
  private expenseBalance;
  private savingsBalance;

  constructor(private homeData : HomeDataService) { 
    this.budgetBalance = this.homeData.GetBudgets();
    this.expenseBalance = this.homeData.GetExpenses();
    this.savingsBalance = this.homeData.GetSavings();
  }

  ngOnInit() {
  }

}
