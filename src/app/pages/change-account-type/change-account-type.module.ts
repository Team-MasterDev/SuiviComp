import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeAccountTypePageRoutingModule } from './change-account-type-routing.module';

import { ChangeAccountTypePage } from './change-account-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeAccountTypePageRoutingModule
  ],
  declarations: [ChangeAccountTypePage]
})
export class ChangeAccountTypePageModule {}
