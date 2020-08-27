import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexLoginPageRoutingModule } from './index-login-routing.module';

import { IndexLoginPage } from './index-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexLoginPageRoutingModule
  ],
  declarations: [IndexLoginPage]
})
export class IndexLoginPageModule {}
