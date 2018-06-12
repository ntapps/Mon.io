import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material'

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { GoogleSigninComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [LoginFormComponent, GoogleSigninComponent]
})
export class LoginModule { }
