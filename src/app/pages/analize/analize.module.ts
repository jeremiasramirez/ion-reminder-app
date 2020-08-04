import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalizePageRoutingModule } from './analize-routing.module';

import { AnalizePage } from './analize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalizePageRoutingModule
  ],
  declarations: [AnalizePage]
})
export class AnalizePageModule {}
