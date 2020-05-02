import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../../material.module';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
    MaterialModule
  ],
  declarations: [
  ],
  exports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExerciseOneModule {}