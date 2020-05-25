import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseFourPage as ExerciseFourPage } from './exercise-four.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseFourPageRoutingModule {}

export const routedComponents = [
  ExerciseFourPage
]
