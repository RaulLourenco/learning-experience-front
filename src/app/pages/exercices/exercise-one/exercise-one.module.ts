import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseOnePageRoutingModule } from './exercise-one-routing.module';

import { ExerciseOnePage } from './exercise-one.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseOnePageRoutingModule,
    SharedModule
  ],
  declarations: [ExerciseOnePage]
})
export class ExercisePagePageModule {}
