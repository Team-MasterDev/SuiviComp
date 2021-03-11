import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunningPageRoutingModule } from './running-routing.module';

import { RunningPage } from './running.page';
import {SharedModule} from '../../sharedModule/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RunningPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  declarations: [
    RunningPage
  ]
})



export class RunningPageModule {}
