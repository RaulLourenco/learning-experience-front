import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstStepsPageRoutingModule } from './first-steps-routing.module';

import { FirstStepsPage } from './first-steps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstStepsPageRoutingModule
  ],
  declarations: [FirstStepsPage]
})
export class FirstStepsPageModule {}
