import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrashPageRoutingModule } from './trash-routing.module';

import { TrashPage } from './trash.page';
import { ComponentModule } from 'src/app/components/components.module';
import { ServiceNotes } from 'src/app/services/service.notes';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashPageRoutingModule,
    ComponentModule 
  ],
  providers: [ServiceNotes],
  declarations: [TrashPage]
})
export class TrashPageModule {}
