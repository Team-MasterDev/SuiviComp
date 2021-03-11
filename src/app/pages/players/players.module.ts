import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';

//first the import of the componet
import { PlayersPage } from './players.page';
import {SharedModule} from '../../sharedModule/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule// it's necessaray to declaire the new component in your main component by a shared component
  ],
  declarations: [
    PlayersPage
  ]
})
export class PlayersPageModule {}
