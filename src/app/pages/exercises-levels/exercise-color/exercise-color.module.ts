import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseColorPageRoutingModule } from './exercise-color-routing.module';

import { ExerciseColorPage } from './exercise-color.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseColorPageRoutingModule
  ],
  declarations: [ExerciseColorPage]
})
export class ExerciseColorPageModule {}
