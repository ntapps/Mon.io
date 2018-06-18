import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseViewComponent } from './expense-view/expense-view.component';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ],
  declarations: [ExpenseViewComponent]
})
export class ExpensesModule { }
