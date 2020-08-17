import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(  private status:StatusBar) { 
    this.status.backgroundColorByHexString('#5260ff');
  }

  ngOnInit() {
  }

}
