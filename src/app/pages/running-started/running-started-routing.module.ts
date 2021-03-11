import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunningStartedPage } from './running-started.page';

const routes: Routes = [
  {
    path: '',
    component: RunningStartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunningStartedPageRoutingModule {}
