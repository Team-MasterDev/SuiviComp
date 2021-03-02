import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import {SharedModule} from '../../sharedModule/shared.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExplorePageRoutingModule,
        SharedModule,
        HttpClientModule
    ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
