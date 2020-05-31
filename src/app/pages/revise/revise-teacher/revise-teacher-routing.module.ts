import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviseTeacherPage } from './revise-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: ReviseTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviseTeacherPageRoutingModule {}
