import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ReportsComponentModule } from './components/reports/reports.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ReportsComponentModule,
    SharedModule
  ],
  declarations: [Tab2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class Tab2PageModule { }
