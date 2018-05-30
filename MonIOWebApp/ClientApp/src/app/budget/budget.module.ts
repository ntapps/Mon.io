import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule
  ],
  declarations: [BudgetComponent]
})
export class BudgetModule { }
