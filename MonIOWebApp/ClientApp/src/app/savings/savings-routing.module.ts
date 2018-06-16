import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsViewComponent } from './savings-view/savings-view.component';

const routes: Routes = [
  {path:"", component:SavingsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }
