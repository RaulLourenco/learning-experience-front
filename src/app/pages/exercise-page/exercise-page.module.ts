import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercisePagePageRoutingModule } from './exercise-page-routing.module';

import { ExercisePagePage } from './exercise-page.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercisePagePageRoutingModule,
    SharedModule
  ],
  declarations: [ExercisePagePage]
})
export class ExercisePagePageModule {}
