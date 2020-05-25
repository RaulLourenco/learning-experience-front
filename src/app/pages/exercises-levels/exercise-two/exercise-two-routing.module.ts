import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseTwoPage as ExerciseTwoPage } from './exercise-two.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseTwoPageRoutingModule {}

export const routedComponents = [
  ExerciseTwoPage
]
