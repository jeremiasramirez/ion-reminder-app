import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosarioPage } from './glosario.page';

const routes: Routes = [
  {
    path: '',
    component: GlosarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosarioPageRoutingModule {}
