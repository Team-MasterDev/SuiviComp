import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';
import { TitleComponent } from '../../components/title/title.component';

import { PlayersPage } from './players.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule
  ],
  declarations: [
    PlayersPage,
    TitleComponent// it's necessaray to declaire the new component in your main component
  ]
})
export class PlayersPageModule {}
