import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfefedrationRoutingModule } from './mfefedration-routing.module';
import { MfefedrationComponent } from './mfefedration.component';


@NgModule({
  declarations: [
    MfefedrationComponent
  ],
  imports: [
    CommonModule,
    MfefedrationRoutingModule
  ]
})
export class MfefedrationModule { }
