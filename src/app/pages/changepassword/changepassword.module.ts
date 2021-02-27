import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepasswordPageRoutingModule } from './changepassword-routing.module';

import { ChangepasswordPage } from './changepassword.page';
import {SharedModule} from '../../sharedModule/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepasswordPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ChangepasswordPage
  ]
})
export class ChangepasswordPageModule {}
