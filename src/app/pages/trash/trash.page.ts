import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/service.feature';
import { ModalController } from '@ionic/angular';
import { modelNotes } from 'src/app/model/model.notes';
import { ServiceNotes } from 'src/app/services/service.notes';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
  providers: [
    FeatureService
  ]
})
export class TrashPage implements OnInit {

  public completeItems:modelNotes[];
  constructor(public feature:FeatureService,public modalAddFromTrash:ModalController,
    public completedNot:ServiceCompleted, public noteServ:ServiceNotes) {
      
   
      this.completeItems = this.completedNot.completed
   
      
  }

  ngOnInit() {
  }

  deleteItem(note,pos){
    this.feature.createToast("Delete",note.title+" ha sido borrada", "danger");
    this.completedNot.deleteNoteComplete(pos)
  }
  restore(note, pos){
    this.feature.createToast("Restore",note.title+" Ha sido restaurada", "success");
    this.completedNot.deleteNoteComplete(pos)
    this.noteServ.addNew(note)
  }

  async openNote(note:modelNotes, positionEl:number){
    const openNotes = await this.modalAddFromTrash.create({
      component: ShownoteComponent,
      mode: "ios",
      componentProps:  {data: note, posEl:positionEl}
    })
    openNotes.present()
  }


  refresh(e:MouseEvent){
    this.completeItems = []
     
      timer(800).subscribe(()=>{
        this.completeItems = JSON.parse(localStorage.getItem("completed")) 
        e.target.complete()
      })
    
  }
   

}
