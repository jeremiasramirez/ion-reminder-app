import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalizePageRoutingModule } from './analize-routing.module';

import { AnalizePage } from './analize.page';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalizePageRoutingModule,
    ComponentModule
  ],
  declarations: [AnalizePage]
})
export class AnalizePageModule {}
