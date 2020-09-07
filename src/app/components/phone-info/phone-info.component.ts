import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.scss'],
})
export class PhoneInfoComponent   {
  @Input() model:string;
  @Input() platform:string;
  @Input() uuid:string|number;
  @Input() version:number;
  @Input() manufacturer:string|number;
  @Input() serial:string|number;
  
  constructor() { }
 

}
