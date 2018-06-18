import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetViewComponent } from './budget-view/budget-view.component';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule
  ],
  declarations: [BudgetViewComponent]
})
export class BudgetModule { }
