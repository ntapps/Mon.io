import { Component, OnInit } from '@angular/core';
import { BudgetDataService } from 'src/app/budget/budget-data.service';
import { Budget } from 'src/app/models/Budget';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.scss']
})
export class BudgetViewComponent implements OnInit {

  private budgetData: Budget;
  constructor(private budgetDataService : BudgetDataService) {
    this.budgetData = null;
   }

  ngOnInit() {
    this.budgetDataService.getAllBudgetData().subscribe(data=>{
      console.log("DING DONG");
      this.budgetData = data;
    });
  }

}
