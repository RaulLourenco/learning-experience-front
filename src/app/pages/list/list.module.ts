import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PatientListPageModule } from './patient-list/patient-list.module';
import { TeacherListPageModule } from './teacher-list/teacher-list.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PatientListPageModule,
    TeacherListPageModule
  ]
})
export class ListModule {}
