import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeNumberPhonePage } from './change-number-phone.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeNumberPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeNumberPhonePageRoutingModule {}
