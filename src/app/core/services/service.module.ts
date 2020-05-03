import { NgModule, ModuleWithProviders, APP_INITIALIZER, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

const SERVICES = [

];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES,
    {
      provide: APP_INITIALIZER,
      // useFactory: appInitializerFactory,
      deps: [
        Injector
      ],
      multi: true
    },
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
