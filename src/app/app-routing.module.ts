import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/first/first.module').then(m => m.FirstPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'competition',
    loadChildren: () => import('./pages/competition/competition.module').then( m => m.CompetitionPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'running',
    loadChildren: () => import('./pages/running/running.module').then( m => m.RunningPageModule)
  },
  {
    path: 'swimming',
    loadChildren: () => import('./pages/swimming/swimming.module').then( m => m.SwimmingPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'changename',
    loadChildren: () => import('./pages/changename/changename.module').then( m => m.ChangenamePageModule)
  },
  {
    path: 'change-number-phone',
    loadChildren: () => import('./pages/change-number-phone/change-number-phone.module').then( m => m.ChangeNumberPhonePageModule)
  },
  {
    path: 'change-account-type',
    loadChildren: () => import('./pages/change-account-type/change-account-type.module').then( m => m.ChangeAccountTypePageModule)
  },
  {
    path: 'change-email',
    loadChildren: () => import('./pages/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
