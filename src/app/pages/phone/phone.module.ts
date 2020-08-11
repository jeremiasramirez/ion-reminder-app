import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonePageRoutingModule } from './phone-routing.module';

import { PhonePage } from './phone.page';
import { SettingHeaderComponent } from 'src/app/components/setting-header/setting-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonePageRoutingModule
  ],
  declarations: [PhonePage,SettingHeaderComponent]
})
export class PhonePageModule {}
