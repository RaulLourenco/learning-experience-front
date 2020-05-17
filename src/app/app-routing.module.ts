import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'index-login', pathMatch: 'full'},
  {
    path: 'index-login',
    loadChildren: () => import('./pages/index-login/index-login.module').then( m => m.IndexLoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/index-login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exercise-page',
    loadChildren: () => import('./pages/exercise-page/exercise-page.module').then( m => m.ExercisePagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
