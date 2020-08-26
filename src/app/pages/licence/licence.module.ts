import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicencePageRoutingModule } from './licence-routing.module';

import { LicencePage } from './licence.page';
import { SettingHeaderComponent } from 'src/app/components/setting-header/setting-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicencePageRoutingModule
  ],
  declarations: [LicencePage, SettingHeaderComponent]
})
export class LicencePageModule {}
