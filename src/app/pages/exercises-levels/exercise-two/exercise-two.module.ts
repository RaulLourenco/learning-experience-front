import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExerciseTwoPageRoutingModule, routedComponents } from './exercise-two-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

const MODULES =[
  CommonModule,
  FormsModule,
  IonicModule,
  ExerciseTwoPageRoutingModule,
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
export class ExerciseTwoPageModule {}
