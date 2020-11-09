import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisePatientPageRoutingModule } from './revise-patient-routing.module';

import { RevisePatientPage } from './revise-patient.page';
import { ButtonModule } from 'src/app/shared/buttons/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisePatientPageRoutingModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  declarations: [RevisePatientPage]
})
export class RevisePatientPageModule {}
