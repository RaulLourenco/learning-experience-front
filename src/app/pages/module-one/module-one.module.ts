import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleOnePageRoutingModule } from './module-one-routing.module';

import { ModuleOnePage } from './module-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleOnePageRoutingModule
  ],
  declarations: [ModuleOnePage]
})
export class ModuleOnePageModule {}
