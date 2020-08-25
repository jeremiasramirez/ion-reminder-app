import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicencePageRoutingModule } from './licence-routing.module';

import { LicencePage } from './licence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicencePageRoutingModule
  ],
  declarations: [LicencePage]
})
export class LicencePageModule {}
