import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    HomeViewComponent
  ]
})
export class HomeModule { }
