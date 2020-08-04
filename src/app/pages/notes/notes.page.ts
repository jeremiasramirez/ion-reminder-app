import { Component  } from '@angular/core'; 
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { ModalController } from '@ionic/angular';
import { NoteComponent } from '../../components/note/note.component'; 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { ServiceCompleted } from 'src/app/services/service.completed';
 

@Component({
  
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  providers: [ServiceCompleted]

})
export class NotesPage   {
  public allNotes;
  public searchData : any = ""
  public searchShow:boolean=true;

  constructor(public service:ServiceNotes,public serviceCompl:ServiceCompleted, public modalAdd:ModalController) { 
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
    this.service.deleteItem(pos,note)
  }

   
  public completed(note,pos:number){
    this.serviceCompl.addNewComplete(note);
    
    this.serviceCompl.addNewComplete(note)
    this.service.deleteItem(pos,note)
     

  }

}
