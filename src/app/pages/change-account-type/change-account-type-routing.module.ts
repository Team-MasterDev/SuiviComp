import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeAccountTypePage } from './change-account-type.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeAccountTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAccountTypePageRoutingModule {}
