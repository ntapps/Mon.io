import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from 'src/app/home/home.module';

const routes: Routes = [

  {path:"", loadChildren: './home/home.module#HomeModule'},
  {path:"login", loadChildren: './login/login.module#LoginModule'},
  {path:"settings", loadChildren: './settings/settings.module#SettingsModule'},
  {path:"home", loadChildren: './home/home.module#HomeModule'},
  {path:"settings", loadChildren: './settings/settings.module#SettingsModule'},
  {path:"settings", loadChildren: './settings/settings.module#SettingsModule'},
  {path:"settings", loadChildren: './settings/settings.module#SettingsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
