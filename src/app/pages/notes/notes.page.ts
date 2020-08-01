import { Component  } from '@angular/core';
import { modelNotes } from 'src/app/services/notes.model';
import { ServiceNotes } from 'src/app/services/service.notes';
import { ModalController } from '@ionic/angular';
import { NoteComponent } from '../../components/note/note.component'; 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';

@Component({
  
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss']

})
export class NotesPage   {
  public allNotes;
  public searchShow:boolean=false;

  constructor(public service:ServiceNotes, public modalAdd:ModalController) { 
    this.allNotes=  this.service.notes;
    
  /*  console.log(new Date("Thu Jul 30 2020 18:08:02"))
    timer(new Date("Thu Jul 30 2020 18:08:02")).subscribe(()=>{
      console.log("hola")
    })*/
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

  async openNote(note:modelNotes, positionEl:number){
    const openNotes = await this.modalAdd.create({
      component: ShownoteComponent,
      componentProps:  {data: note, posEl:positionEl}
    })
    openNotes.present()
  }

  

  public deleteItem(note,pos:number){

  }

   
    public completed(note,pos:number){
    
  }
}
