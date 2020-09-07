import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicencePageRoutingModule } from './licence-routing.module';

import { LicencePage } from './licence.page';
import { SettingHeaderComponent } from 'src/app/components/setting-header/setting-header.component';
import { LicenceInfoComponent } from 'src/app/components/licence-info/licence-info.component';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicencePageRoutingModule,
    ComponentModule
  ],
  declarations: [
    LicencePage 
  ]
})
export class LicencePageModule {}
