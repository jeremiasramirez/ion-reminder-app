import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [

  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('../pages/notes/notes.module').then( m => m.NotesPageModule)
      },
    ] 
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
