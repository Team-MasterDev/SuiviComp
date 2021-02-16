import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  },
  {
<<<<<<< HEAD
    path: 'register',
    loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
=======
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
>>>>>>> e8b66cf48f1e49e33eaa6c7a5bce43377679a1af
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPageRoutingModule {}
