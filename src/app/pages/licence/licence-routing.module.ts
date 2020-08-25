import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicencePage } from './licence.page';

const routes: Routes = [
  {
    path: '',
    component: LicencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicencePageRoutingModule {}
