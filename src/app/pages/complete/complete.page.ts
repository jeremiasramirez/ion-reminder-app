import { Component, OnInit } from '@angular/core';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { modelNotes } from 'src/app/model/model.notes';
import { ServiceNotes } from 'src/app/services/service.notes';
import { FeatureService } from 'src/app/services/service.feature';
import { timer } from 'rxjs';

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
  constructor(public feature:FeatureService,
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

  refresherContent(e){
    if (this.completeItems.length>=1){
      this.completeItems = []
      timer(800).subscribe(()=> {
        e.target.complete()
        this.completeItems= JSON.parse(localStorage.getItem("completed"))
      })
    }
    else{
      e.target.complete()
    }
  }
  

}
