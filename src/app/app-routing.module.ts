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
    loadChildren: () => import('./pages/home.module').then(m => m.HomePageModule)
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
  },
  {
    path: 'signup-teacher',
    loadChildren: () => import('./pages/signup/signup-teacher/signup-teacher.module').then( m => m.SignupTeacherPageModule)
  },
  {
    path: 'revise-teacher/:id',
    loadChildren: () => import('./pages/revise/revise-teacher/revise-teacher.module').then( m => m.ReviseTeacherPageModule)
  },
  {
    path: 'revise-patient/:id',
    loadChildren: () => import('./pages/revise/revise-patient/revise-patient.module').then( m => m.RevisePatientPageModule)
  },
  {
    path: 'exercise-one',
    loadChildren: () => import('./pages/exercises-levels/exercise-one/exercise-one.module').then( m => m.ExerciseOnePageModule)
  },
  {
    path: 'exercise-two',
    loadChildren: () => import('./pages/exercises-levels/exercise-two/exercise-two.module').then( m => m.ExerciseTwoPageModule)
  },
  {
    path: 'exercise-three',
    loadChildren: () => import('./pages/exercises-levels/exercise-three/exercise-three.module').then( m => m.ExerciseThreePageModule)
  },
  {
    path: 'exercise-four',
    loadChildren: () => import('./pages/exercises-levels/exercise-four/exercise-four.module').then( m => m.ExerciseFourPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
