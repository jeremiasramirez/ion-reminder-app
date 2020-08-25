import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { settings,settingsClick } from 'src/app/services/service.settings';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  private configs:any;
  private configsClick:any;
  constructor( private status:StatusBar) { 
    this.status.backgroundColorByHexString('#5260ff');
  }

  ngOnInit() {
    this.configs = settings
    this.configsClick = settingsClick
  }

}

