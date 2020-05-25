import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsComponent } from './charts.component';
import { MaterialModule } from '../../../../material.module';
import { ChartsModule } from 'ng2-charts'

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
    MaterialModule,
    ChartsModule
  ],
  declarations: [
    ChartsComponent
  ],
  exports: [
    ChartsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ChartsComponentModule {}