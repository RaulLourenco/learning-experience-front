import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelOnePageRoutingModule } from './level-one-routing.module';

import { LevelOnePage } from './level-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelOnePageRoutingModule
  ],
  declarations: [LevelOnePage]
})
export class LevelOnePageModule {}
