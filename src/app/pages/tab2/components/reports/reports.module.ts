import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsComponent } from './reports.component';
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
    ReportsComponent
  ],
  exports: [
    ReportsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ReportsComponentModule {}