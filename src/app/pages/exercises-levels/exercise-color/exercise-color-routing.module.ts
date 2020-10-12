import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseColorPage } from './exercise-color.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseColorPageRoutingModule {}
