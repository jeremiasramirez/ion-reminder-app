import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from "@angular/forms"
import { IonicModule } from '@ionic/angular';

import { LockPageRoutingModule } from './lock-routing.module';

import { LockPage } from './lock.page';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockPageRoutingModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  declarations: [LockPage]
})
export class LockPageModule {}
