import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('../pages/explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'competition',
        loadChildren: () => import('../pages/competition/competition.module').then(m => m.CompetitionPageModule)
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
          },
          {// To navigate to nested Components take a look in the ionic documentation.
            path: 'running',
            loadChildren: () => import('../pages/running/running.module').then(m => m.RunningPageModule)
          },
          {
            path: 'running-started',
            loadChildren: () => import('../pages/running-started/running-started.module').then( m => m.RunningStartedPageModule)
          },
          {// To navigate to nested Components take a look in the ionic documentation.
            path: 'swimming',
            loadChildren: () => import('../pages/swimming/swimming.module').then(m => m.SwimmingPageModule)
          }
        ]
      },
      {
        path: 'players',
        loadChildren: () => import('../pages/players/players.module').then(m => m.PlayersPageModule)
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          },
          {
            path: 'changepassword',
            loadChildren: () => import('../pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
          },
          {
            path: 'changeemail',
            loadChildren: () => import('../pages/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
          },
          {
            path: 'changename',
            loadChildren: () => import('../pages/changename/changename.module').then( m => m.ChangenamePageModule)
          }
          ,
          {
            path: 'changeph_number',
            loadChildren: () => import('../pages/change-number-phone/change-number-phone.module').then( m => m.ChangeNumberPhonePageModule)
          }

        ]

      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {


}
