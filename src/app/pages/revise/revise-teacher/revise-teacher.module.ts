import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviseTeacherPageRoutingModule } from './revise-teacher-routing.module';

import { ReviseTeacherPage } from './revise-teacher.page';
import { ButtonModule } from 'src/app/shared/buttons/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviseTeacherPageRoutingModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  declarations: [ReviseTeacherPage]
})
export class ReviseTeacherPageModule {}
