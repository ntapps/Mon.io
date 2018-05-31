import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent, GoogleSigninComponent} from './login-form/login-form.component';
const routes: Routes = 
[
  {path:"", component:GoogleSigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
