import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeNumberPhonePageRoutingModule } from './change-number-phone-routing.module';

import { ChangeNumberPhonePage } from './change-number-phone.page';
import {SharedModule} from '../../sharedModule/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeNumberPhonePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ChangeNumberPhonePage]
})
export class ChangeNumberPhonePageModule {}
