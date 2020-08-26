import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { settings } from 'src/app/services/service.settings';
import { ActionSheetController } from '@ionic/angular';
import { DarkMode } from 'src/app/services/service.dark';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  private configs:any;
  private searchValue:string|number = "";
  constructor( private status:StatusBar,
    private action:ActionSheetController,
    private them:DarkMode) { 
    this.status.backgroundColorByHexString('#5260ff');
  }

  ngOnInit() {
    this.configs = settings
    
  }

  async changeTheme(){
    const themes = await this.action.create({
      header: "Theme",
      buttons: [ 
        {text: "Modo dark", icon: "contrast", handler: ()=>{this.them.darks()}},
        {text: "Modo light", icon: "sunny", handler: ()=>{this.them.darks()}},
        {text:"Cancel",icon: "close", role: "cancel"}
      ]
    })

    themes.present()
  }

 
  resetSettings(){

  }
}

