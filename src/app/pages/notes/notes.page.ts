import { Component  } from '@angular/core';
import { modelNotes } from 'src/app/services/notes.model';
import { ServiceNotes } from 'src/app/services/service.notes';
import { ModalController } from '@ionic/angular';
import { NoteComponent } from '../../components/note/note.component';

@Component({
  
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss']

})
export class NotesPage   {
  public allNotes:modelNotes[] ;

  constructor(public service:ServiceNotes, public modalAdd:ModalController) { 
    this.allNotes=  this.service.notes;

  /*
      setTimeout(()=>{
          let x = {id: 3, title: 'Carro',
          date: null,
          description: null}
          this.service.notes.push(x)
      },3000)
  */

  }

  async openAdd(){
    const modalAdds = await this.modalAdd.create({
      component: NoteComponent
    })
    modalAdds.present()
  }

   
}
