import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { DarkMode } from './services/service.dark';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[
    DarkMode
  ] 
})
export class AppComponent {
  public numTrash : number=0;
  public numNotes : number=0;
  public checkedDark : boolean =  false;
  constructor(
    private menu:MenuController, 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dark:DarkMode
  ) {
    this.initializeApp();
 
 

   this.checkedDark = this.dark.existDark()
    this.setterNums()
  }


  setterNums(){
       setInterval(()=>{
      this.numNotes = JSON.parse(localStorage.getItem("notes")).length
      this.numTrash = JSON.parse(localStorage.getItem("completed")).length
    },2000)
  }

  darks(){
    document.body.classList.toggle("dark")
    if (this.checkedDark == false) this.checkedDark=true; else this.checkedDark = false
      
    if (this.checkedDark){
      this.dark.setDark()
    }
    else{
      this.dark.quitDark()
    }
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false); 
      this.statusBar.backgroundColorByHexString('#5260ff');
      this.splashScreen.hide();
    });
  }

  closeMenu(){
    this.menu.close()
  }
}
