import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonePageRoutingModule } from './phone-routing.module';

import { PhonePage } from './phone.page';
import { ComponentModule } from 'src/app/components/components.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonePageRoutingModule,
    ComponentModule
  ],
  declarations: [PhonePage]
})
export class PhonePageModule {}
