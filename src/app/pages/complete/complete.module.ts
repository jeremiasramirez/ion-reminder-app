import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { CompletePageRoutingModule } from './complete-routing.module';

import { CompletePage } from './complete.page';
import { ItemsFavoriteComponent } from 'src/app/components/items-favorite/items-favorite.component';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    CompletePageRoutingModule
  ],
  declarations: [CompletePage,ItemsFavoriteComponent],
  providers: [
    ServiceCompleted
  ]
})
export class CompletePageModule {}
