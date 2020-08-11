import { Component, OnInit } from '@angular/core';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { modelNotes } from 'src/app/model/model.notes';
import { ServiceNotes } from 'src/app/services/service.notes';
import { FeatureService } from 'src/app/services/service.feature';
import { timer } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
  providers: [
    ServiceCompleted,
    FeatureService
  ]
})
export class CompletePage implements OnInit {
  public completeItems:modelNotes[];
  constructor(public feature:FeatureService,public modalAddFromTrash:ModalController,
    public completedNot:ServiceCompleted, public noteServ:ServiceNotes) {
      
    setInterval(()=>{
      this.completeItems = this.completedNot.completed
    },1000)
      
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

   
  

}
