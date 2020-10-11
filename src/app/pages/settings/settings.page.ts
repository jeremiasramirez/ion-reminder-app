import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { settings } from 'src/app/services/service.settings'; 
import { DarkMode } from 'src/app/services/service.dark';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  private configs:any;
  private searchValue:string|number = "";
  constructor(  
    private status:StatusBar,
    private them:DarkMode) { 
    this.status.backgroundColorByHexString('#5260ff');
  }

  ngOnInit() {
    this.configs = settings
    
  }

  private changeTheme(){
    this.them.changeTheme()
  }

  
}

