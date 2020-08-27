import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LottieComponent } from './lottie.component';
import { LottieAnimationViewModule } from 'ng-lottie';


@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
    LottieAnimationViewModule.forRoot(),
  ],
  declarations: [
    LottieComponent
  ],
  exports: [
    LottieComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class LottieModule {}