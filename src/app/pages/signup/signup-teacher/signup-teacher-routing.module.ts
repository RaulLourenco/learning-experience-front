import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupTeacherPage } from './signup-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: SignupTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupTeacherPageRoutingModule {}
