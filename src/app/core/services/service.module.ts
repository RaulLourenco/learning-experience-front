import { NgModule, ModuleWithProviders, APP_INITIALIZER, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { ApiService } from './api.service';
import { ApiAuthService } from './api-auth.service';
import { ApiLevelService } from './api-level.service';
import { AudioService } from './audio.service';
import { MediaService } from './media.service';

const SERVICES = [
  ApiService,
  ApiAuthService,
  ApiLevelService,
  AudioService,
  MediaService
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [],
  providers: [
    ...SERVICES
  ],
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServiceModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
