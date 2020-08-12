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
    path: 'home/settings/trash',
    loadChildren: () => import('./pages/trash/trash.module').then( m => m.TrashPageModule),
    canActivate: [LockGuard] 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [LockGuard]
  },
  
  {
    path: 'home/notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
     ,
    canActivate: [LockGuard] 
  },
  {
    path: 'home/settings/trash',
    loadChildren: () => import('./pages/trash/trash.module').then( m => m.TrashPageModule)
    ,
    canActivate: [LockGuard] 
  },
/*  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  /*{
    path: 'complete',
    loadChildren: () => import('./pages/complete/complete.module').then( m => m.CompletePageModule)
  },*/
  {
    path: 'home/settings/phone',
    loadChildren: () => import('./pages/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'home/settings/lock',
    loadChildren: () => import('./pages/lock/lock.module').then( m => m.LockPageModule)
  },
  {
    path: 'analize',
    loadChildren: () => import('./pages/analize/analize.module').then( m => m.AnalizePageModule)
  },
  {
    path: 'home/settings/report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'home/settings/plan',
    loadChildren: () => import('./pages/plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'home/settings/notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  }, 
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
