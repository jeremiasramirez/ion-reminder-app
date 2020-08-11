import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrashPageRoutingModule } from './trash-routing.module';

import { TrashPage } from './trash.page';
import {ModuleComponent } from "../../components/module.component"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashPageRoutingModule,ModuleComponent
  ],
  declarations: [TrashPage]
})
export class TrashPageModule {}
