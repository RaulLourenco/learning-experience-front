import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothConfigPage } from './bluetooth-config.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothConfigPageRoutingModule {}
