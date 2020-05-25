import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExerciseThreePageRoutingModule, routedComponents } from './exercise-three-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

const MODULES =[
  CommonModule,
  FormsModule,
  IonicModule,
  ExerciseThreePageRoutingModule,
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
export class ExerciseThreePageModule {}
