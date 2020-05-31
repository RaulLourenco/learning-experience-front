import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RevisePatientPageModule } from './revise-patient/revise-patient.module';
import { ReviseTeacherPageModule } from './revise-teacher/revise-teacher.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RevisePatientPageModule,
    ReviseTeacherPageModule
  ]
})
export class ReviseModule {
}
