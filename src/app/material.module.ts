import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore

//this file used just to make the import of angular material more esay recommanded

import { HomePageRoutingModule } from './home-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MaterialModule { }
