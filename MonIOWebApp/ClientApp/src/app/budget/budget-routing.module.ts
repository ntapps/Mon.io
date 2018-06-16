import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetViewComponent } from './budget-view/budget-view.component';

const routes: Routes = [
  {path:"", component:BudgetViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
