import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsViewComponent } from './savings-view/savings-view.component';

@NgModule({
  imports: [
    CommonModule,
    SavingsRoutingModule
  ],
  declarations: [SavingsViewComponent]
})
export class SavingsModule { }
