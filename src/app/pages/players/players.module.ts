import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';
import { HeaderComponent } from '../../components/header/header.component';//first the import of the componet

import { PlayersPage } from './players.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PlayersPage,
    HeaderComponent// it's necessaray to declaire the new component in your main component
  ]
})
export class PlayersPageModule {}
