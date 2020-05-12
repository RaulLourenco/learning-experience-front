import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ExerciseLevelComponentModule } from './components/exercise-level/exercise-level.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExerciseLevelComponentModule,
    Tab1PageRoutingModule,
    SharedModule
  ],
  declarations: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, 
  NO_ERRORS_SCHEMA]
})
export class Tab1PageModule {}
