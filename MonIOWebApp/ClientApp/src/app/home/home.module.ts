import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ],
  declarations: [
    HomeViewComponent
  ]
})
export class HomeModule { }
