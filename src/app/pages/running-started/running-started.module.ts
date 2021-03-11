import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunningStartedPageRoutingModule } from './running-started-routing.module';

import { RunningStartedPage } from './running-started.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunningStartedPageRoutingModule
  ],
  declarations: [RunningStartedPage]
})
export class RunningStartedPageModule {}
