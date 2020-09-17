import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.scss'],
})
export class PhoneInfoComponent   {
  @Input() MODEL:any;
  @Input() PLATFORM:any;
  @Input() UUID:any;
  @Input() VERSION:any;
  @Input() MANUFACTURER:any;
  @Input() SERIAL:any;
  constructor() { }
 

}
