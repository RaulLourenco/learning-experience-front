import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseThreePage as ExerciseThreePage } from './exercise-three.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseThreePageRoutingModule {}

export const routedComponents = [
  ExerciseThreePage
]
