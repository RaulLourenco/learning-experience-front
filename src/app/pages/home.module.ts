import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ButtonModule } from '../shared/buttons/button.module';

const MODULES = [
  IonicModule,
  CommonModule,
  FormsModule,
  HomePageRoutingModule,
  ButtonModule
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
