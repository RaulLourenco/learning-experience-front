import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { CloseButtonComponent } from './close-button/close-button.component';

const BUTTONS = [
  CloseButtonComponent
]

const MODULES = [
  IonicModule,
  CommonModule,
  MaterialModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...BUTTONS
  ],
  exports: [
    ...BUTTONS
  ]
})
export class ButtonModule {}
