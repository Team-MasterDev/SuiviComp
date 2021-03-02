import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunningPageRoutingModule } from './running-routing.module';

import { RunningPage } from './running.page';

import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunningPageRoutingModule
  ],
  declarations: [
    RunningPage,
    HeaderComponent
  ]
})



export class RunningPageModule {}
