import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexLoginPageRoutingModule } from './index-login-routing.module';

import { IndexLoginPage } from './index-login.page';
import { LottieModule } from '../../components/lottie.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexLoginPageRoutingModule,
    LottieModule
  ],
  declarations: [IndexLoginPage]
})
export class IndexLoginPageModule {}
