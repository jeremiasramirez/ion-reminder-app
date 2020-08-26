import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  private MODEL:any;
  private PLATFORM:any;
  private UUID:any;
  private VERSION:any;
  private MANUFACTURER:any;
  private SERIAL:any;


  constructor(private device:Device) {
    this.MODEL = this.device.model;
    this.PLATFORM = this.device.platform
    this.UUID = this.device.uuid
    this.VERSION = this.device.version
    this.MANUFACTURER=this.device.manufacturer
    this.SERIAL=this.device.serial
   }

  ngOnInit() {
  }
 
}
