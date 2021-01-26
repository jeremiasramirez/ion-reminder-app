import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
import {LockGuard} from "./guard/lock.guard"

import { ServiceLock } from './services/service.lock';
import { ServiceNotes } from './services/service.notes';
import { Device } from '@ionic-native/device/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 
@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,ServiceNotes,
    LockGuard,Device,
    AndroidFullScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ServiceLock 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
