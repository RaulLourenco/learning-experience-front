import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfilePageRoutingModule, routedComponents } from './profile-routing.module'
import { MaterialModule } from 'src/app/material.module';
import { ListModule } from '../list/list.module';
import { SignupTeacherAndPatientModule } from '../signup/signup.module';

const MODULES = [
  IonicModule,
  CommonModule,
  FormsModule,
  // RouterModule.forChild([{ path: '', component: ProfilePage }]),
  ProfilePageRoutingModule,
  MaterialModule,
  ListModule,
  SignupTeacherAndPatientModule
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...routedComponents
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePageModule {}
