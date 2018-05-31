import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ApiDataService} from './api-data.service';
import { AuthenticationService } from 'src/app/shared-data/authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedDataModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedDataModule,
      providers: [ApiDataService, AuthenticationService]
    }
  }
}
