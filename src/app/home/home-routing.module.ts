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
        {
        path: 'trash',
        loadChildren: () => import('../pages/trash/trash.module').then( m => m.TrashPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      }
    ] 
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
