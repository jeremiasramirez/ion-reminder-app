import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/service.feature';
import { AlertController, ModalController } from '@ionic/angular';
import { modelNotes } from 'src/app/model/model.notes';
import { ServiceNotes } from 'src/app/services/service.notes';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { timer } from 'rxjs';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
  providers: [
    FeatureService,ServiceCompleted
  ]
})
export class TrashPage implements OnInit {

  private completeItems:modelNotes[];
  private show :boolean= false;
  private startValue:0;
  private endValue:number=10;

  constructor(private status:StatusBar,
    private feature:FeatureService,
    private modalAddFromTrash:ModalController,
    private confirmDelete:AlertController,
    private completedNot:ServiceCompleted ) {
   
      
      this.completeItems = this.completedNot.completed
      this.completeItems = JSON.parse(localStorage.getItem("completed")) 
      
  }

  ngOnInit() {
    timer(400).subscribe(()=>this.show=true)
       
    this.status.backgroundColorByHexString("#eb445a")
  }
  ngOnDestroy(){
    this.status.backgroundColorByHexString('#5260ff');
  }
  private deleted(note,pos){
    this.completedNot.deleteNoteComplete(pos)
    this.completeItems.splice(pos,1)
    this.feature.createToast("Delete",note.title+" ha sido borrada", "danger");
  }
  private async deleteItem(note,pos){
    
    const confirm= await this.confirmDelete.create({
      header: "Eliminar",
      subHeader: "Eliminar de manera permanente",
      message: "Deseas continuar ?",
      buttons: [
        { text: "Eliminar",  handler:()=>{ this.deleted(note,pos) }},
        { text: "Cancelar", role:"cancel"}
      ]
    })
    confirm.present();
  }
 /* restore(note, pos){
    this.feature.createToast("Restore",note.title+" Ha sido restaurada", "success");
    this.completedNot.deleteNoteComplete(pos)
   // this.noteServ.addNew(note)
  }*/

  async openNote(note:modelNotes, positionEl:number){
    const openNotes = await this.modalAddFromTrash.create({
      component: ShownoteComponent,
      mode: "ios",
      componentProps:  {data: note, posEl:positionEl}
    })
    openNotes.present()
  }


 private refresh(e:MouseEvent){
    this.completeItems = []
    this.show=false
      timer(400).subscribe(()=>{
        this.completeItems = JSON.parse(localStorage.getItem("completed")) 
       // e.target.complete()
        this.show=true
      })
    
  }

  private moreItem(e:any){
    
    timer(600).subscribe(()=>{
      e.target.complete();
      this.endValue+=10
    })
    
  }
   

}
