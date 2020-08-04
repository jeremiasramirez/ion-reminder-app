import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LockGuard } from './guard/lock.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) 
    ,
    canActivate: [LockGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [LockGuard]
  },
  /*
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'trash',
    loadChildren: () => import('./pages/trash/trash.module').then( m => m.TrashPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'complete',
    loadChildren: () => import('./pages/complete/complete.module').then( m => m.CompletePageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./pages/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'lock',
    loadChildren: () => import('./pages/lock/lock.module').then( m => m.LockPageModule)
  },
  {
    path: 'analize',
    loadChildren: () => import('./pages/analize/analize.module').then( m => m.AnalizePageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./pages/plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },*/
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign/sign.module').then( m => m.SignPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
