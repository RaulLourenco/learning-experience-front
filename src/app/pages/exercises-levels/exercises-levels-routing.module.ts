import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesLevelsPage } from './exercises-levels.page';
import { ExerciseLevelComponent } from './components/exercise-level/exercise-level.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesLevelsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesLevelsPageRoutingModule {}

export const routedComponets = [
  ExercisesLevelsPage,
  ExerciseLevelComponent
]
