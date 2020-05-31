import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PatientListPageModule } from './patient-list/patient-list.module';
import { TeacherListPageModule } from './teacher-list/teacher-list.module';
import { ReviseModule } from '../revise/revise.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PatientListPageModule,
    TeacherListPageModule,
    ReviseModule
  ]
})
export class ListModule {}
