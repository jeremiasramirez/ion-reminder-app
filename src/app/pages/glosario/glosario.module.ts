import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlosarioPageRoutingModule } from './glosario-routing.module';

import { GlosarioPage } from './glosario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlosarioPageRoutingModule
  ],
  declarations: [GlosarioPage]
})
export class GlosarioPageModule {}
