import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCompleted } from './service.completed';
import { DarkMode } from './service.dark';
import { FeatureService } from './service.feature';
import { ServiceLock } from './service.lock';
import { ServiceNotes } from './service.notes';
 
@NgModule({
 
  declarations: [
    ServiceCompleted,
    DarkMode,
    FeatureService,
    ServiceLock,
    ServiceNotes
    ],
    imports: [
        CommonModule
      ],
  exports: [
    ServiceCompleted,
    DarkMode,
    FeatureService,
    ServiceLock,
    ServiceNotes
  ]
  
})
export class ServiceModule {}
