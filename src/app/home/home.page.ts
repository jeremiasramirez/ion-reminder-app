import { Component } from '@angular/core';
import { ServiceNotes } from '../services/service.notes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'] 
  
})
export class HomePage {

  constructor(public service:ServiceNotes) {

  }

}
