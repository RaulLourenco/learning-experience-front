import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothConfigPageRoutingModule } from './bluetooth-config-routing.module';

import { BluetoothConfigPage } from './bluetooth-config.page';
import { ButtonModule } from 'src/app/shared/buttons/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothConfigPageRoutingModule,
    ButtonModule
  ],
  declarations: [BluetoothConfigPage]
})
export class BluetoothConfigPageModule {}
