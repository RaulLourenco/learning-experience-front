import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExercisesLevelsPageRoutingModule, routedComponets } from './exercises-levels-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

const MODULES = [
  IonicModule,
  CommonModule,
  FormsModule,
  ExercisesLevelsPageRoutingModule,
  SharedModule,
  MaterialModule
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...routedComponets
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class ExercisesLevelsPageModule {}
