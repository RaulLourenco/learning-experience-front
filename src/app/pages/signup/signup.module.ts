import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { SignupPatientPageModule } from './signup-patient/signup-patient.module';
import { SignupTeacherPageModule } from './signup-teacher/signup-teacher.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SignupPatientPageModule,
    SignupTeacherPageModule
  ]
})
export class SignupTeacherAndPatientModule {}
