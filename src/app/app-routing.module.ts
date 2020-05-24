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
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'teacher-list',
    loadChildren: () => import('./pages/list/teacher-list/teacher-list.module').then( m => m.TeacherListPageModule)
  },
  {
    path: 'patient-list',
    loadChildren: () => import('./pages/list/patient-list/patient-list.module').then( m => m.PatientListPageModule)
  },
  {
    path: 'signup-patient',
    loadChildren: () => import('./pages/signup/signup-patient/signup-patient.module').then( m => m.SignupPatientPageModule)
  },  {
    path: 'signup-teacher',
    loadChildren: () => import('./pages/signup/signup-teacher/signup-teacher.module').then( m => m.SignupTeacherPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
