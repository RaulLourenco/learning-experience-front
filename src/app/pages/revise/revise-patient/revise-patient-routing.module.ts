import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisePatientPage } from './revise-patient.page';

const routes: Routes = [
  {
    path: '',
    component: RevisePatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisePatientPageRoutingModule {}
