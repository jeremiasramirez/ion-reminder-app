import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceNotes } from '../services/service.notes';
import { ServiceCompleted } from '../services/service.completed';
import { ModalController } from '@ionic/angular';
import { NoteComponent } from '../components/note/note.component';
import { timer } from 'rxjs';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']  
  ,providers:[ ]
})
export class HomePage {
  public lenNotes :number=0;
  public lenComplet :number=0;
  constructor(public modalAdd:ModalController,public router:Router,public servComp:ServiceCompleted, public servNote:ServiceNotes ) {
     
 
    this.router.navigate(["home/notes"]);
  }

  async openAdd(){
    const modalAdds = await this.modalAdd.create({
      component: NoteComponent
    })
    timer(500).subscribe(()=>{
      modalAdds.present()
    })
  }


}
