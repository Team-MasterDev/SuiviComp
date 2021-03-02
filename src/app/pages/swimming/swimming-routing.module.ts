import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwimmingPage } from './swimming.page';

const routes: Routes = [
  {
    path: '',
    component: SwimmingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwimmingPageRoutingModule {}
