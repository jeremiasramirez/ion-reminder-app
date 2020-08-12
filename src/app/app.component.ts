import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] 
})
export class AppComponent {
  public numTrash : number=0;
  public numNotes : number=0;
  constructor(
    private menu:MenuController, 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
   setInterval(()=>{
    this.numNotes = JSON.parse(localStorage.getItem("notes")).length
    this.numTrash = JSON.parse(localStorage.getItem("completed")).length
   },2000)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  closeMenu(){
    this.menu.close()
  }
}
