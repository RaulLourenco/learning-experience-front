import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupTeacherPageRoutingModule } from './signup-teacher-routing.module';

import { SignupTeacherPage } from './signup-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupTeacherPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupTeacherPage]
})
export class SignupTeacherPageModule {}
