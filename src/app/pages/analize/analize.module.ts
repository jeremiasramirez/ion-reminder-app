import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalizePageRoutingModule } from './analize-routing.module';

import { AnalizePage } from './analize.page';
import { SettingHeaderComponent } from 'src/app/components/setting-header/setting-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalizePageRoutingModule
  ],
  declarations: [AnalizePage, SettingHeaderComponent]
})
export class AnalizePageModule {}
