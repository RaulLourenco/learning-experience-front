import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherListPageRoutingModule } from './teacher-list-routing.module';

import { TeacherListPage } from './teacher-list.page';
import { ButtonModule } from 'src/app/shared/buttons/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherListPageRoutingModule,
    ButtonModule
  ],
  declarations: [TeacherListPage]
})
export class TeacherListPageModule {}
