import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisePatientPageRoutingModule } from './revise-patient-routing.module';

import { RevisePatientPage } from './revise-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisePatientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RevisePatientPage]
})
export class RevisePatientPageModule {}
