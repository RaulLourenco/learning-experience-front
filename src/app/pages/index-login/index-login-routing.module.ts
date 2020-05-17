import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexLoginPage } from './index-login.page';

const routes: Routes = [
  {
    path: '',
    component: IndexLoginPage
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexLoginPageRoutingModule {}
