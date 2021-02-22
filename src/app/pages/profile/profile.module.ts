import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfilRowComponent } from '../../components/profil-row/profil-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    ProfilePage,
    HeaderComponent,
    ProfilRowComponent
  ]
})
export class ProfilePageModule {


}
