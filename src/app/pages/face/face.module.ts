import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacePageRoutingModule } from './face-routing.module';

import { FacePage } from './face.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacePageRoutingModule
  ],
  declarations: [FacePage]
})
export class FacePageModule {}
