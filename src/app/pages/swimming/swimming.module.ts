import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwimmingPageRoutingModule } from './swimming-routing.module';

import { SwimmingPage } from './swimming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwimmingPageRoutingModule
  ],
  declarations: [SwimmingPage]
})
export class SwimmingPageModule {}
