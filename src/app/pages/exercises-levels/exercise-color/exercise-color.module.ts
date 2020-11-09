import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseColorPageRoutingModule } from './exercise-color-routing.module';

import { ExerciseColorPage } from './exercise-color.page';
import { ButtonModule } from 'src/app/shared/buttons/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseColorPageRoutingModule,
    ButtonModule
  ],
  declarations: [ExerciseColorPage]
})
export class ExerciseColorPageModule {}
