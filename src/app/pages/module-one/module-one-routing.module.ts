import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleOnePage } from './module-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleOnePage
  },
  {
    path: 'exercise-module-one',
    loadChildren: () => import('./exercise-one/exercise-one.module').then( m => m.ExerciseOneModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleOnePageRoutingModule {}
