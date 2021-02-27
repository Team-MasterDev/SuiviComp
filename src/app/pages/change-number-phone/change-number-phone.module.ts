import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeNumberPhonePageRoutingModule } from './change-number-phone-routing.module';

import { ChangeNumberPhonePage } from './change-number-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeNumberPhonePageRoutingModule
  ],
  declarations: [ChangeNumberPhonePage]
})
export class ChangeNumberPhonePageModule {}
