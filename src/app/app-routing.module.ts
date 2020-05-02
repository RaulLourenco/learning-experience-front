import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'module-one',
    loadChildren: () => import('./module-one/module-one.module').then( m => m.ModuleOnePageModule)
  },
  {
    path: 'module-one',
    loadChildren: () => import('./module-one/module-one.module').then( m => m.ModuleOnePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
