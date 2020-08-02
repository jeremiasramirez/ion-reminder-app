import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalizePage } from './analize.page';

const routes: Routes = [
  {
    path: '',
    component: AnalizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalizePageRoutingModule {}
