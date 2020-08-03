import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceNotes } from '../services/service.notes';
import { ServiceCompleted } from '../services/service.completed';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']  
  ,providers:[ServiceCompleted]
})
export class HomePage {
  public lenNotes :number=0;
  public lenComplet :number=0;
  constructor(public router:Router,public servComp:ServiceCompleted, public servNote:ServiceNotes ) {
    this.lenNotes= this.servNote.notes.length
    this.lenComplet= this.servComp.completed.length
    this.router.navigate(["home/notes"]);
  }

}
