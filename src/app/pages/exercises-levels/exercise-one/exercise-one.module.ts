import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExerciseOnePageRoutingModule, routedComponents } from './exercise-one-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

const MODULES =[
  CommonModule,
  FormsModule,
  IonicModule,
  ExerciseOnePageRoutingModule,
  SharedModule
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...routedComponents
  ]
})
export class ExerciseOnePageModule {}
