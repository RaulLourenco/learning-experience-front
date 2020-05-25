import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsPage } from './reports.page';
import { ChartsComponent } from './components/reports/charts.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsPageRoutingModule {}

export const routedComponents =[
  ChartsComponent,
  ReportsPage
]