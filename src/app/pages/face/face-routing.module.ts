import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacePage } from './face.page';

const routes: Routes = [
  {
    path: '',
    component: FacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacePageRoutingModule {}
