import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportsPageRoutingModule, routedComponents } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { ChartsModule } from 'ng2-charts'

const MODULES = [
  IonicModule,
  CommonModule,
  FormsModule,
  ReportsPageRoutingModule,
  MaterialModule,
  SharedModule
]

@NgModule({
  imports: [
    ...MODULES,
    ChartsModule
  ],
  declarations: [
    ...routedComponents
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class ReportsPageModule { }
