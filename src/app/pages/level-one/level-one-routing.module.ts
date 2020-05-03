import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelOnePage } from './level-one.page';

const routes: Routes = [
  {
    path: '',
    component: LevelOnePage
  },
  {
    path: 'exercise-level-one',
    loadChildren: () => import('./exercises-level-one/exercises-level-one.module').then( m => m.ExerciseLevelOneModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelOnePageRoutingModule {}
