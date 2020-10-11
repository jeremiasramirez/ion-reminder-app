import { Component  } from '@angular/core'; 
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { NoteComponent } from '../../components/note/note.component'; 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { FeatureService } from 'src/app/services/service.feature';
 
import { StatusBar } from '@ionic-native/status-bar/ngx'; 

import { interval, timer } from 'rxjs';
import { ServiceFavorite } from 'src/app/services/service.favorite';
 
 

@Component({
  
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  providers: [ServiceCompleted,FeatureService,ServiceFavorite]

})
export class NotesPage   {
  private allNotes;
  private endValue:number=10
  private searchData:string = ""
  private searchShow:boolean=true;
  private show:boolean;
  private syncing:boolean=false;


  //timings
  private timingShow:any;
  private timingVerifiedNotesDeletes:any;
  private timingSync:any;
  private timingMore:any;

  constructor(
    private favorite:ServiceFavorite,
    private status:StatusBar,
    private service:ServiceNotes,
    private serviceCompl:ServiceCompleted,
    private feature:FeatureService, 
    private modalAdd:ModalController,
    private action:ActionSheetController,

    private detail:AlertController
    ) { 
      this.allNotes = this.service.notes;
      this.status.backgroundColorByHexString('#5260ff');
  }
 
  ngOnInit(){
   this.timingShow= timer(1000).subscribe(()=>this.show=true);

   this.timingVerifiedNotesDeletes= interval(30000).subscribe(()=>{
      this.sync()
 
    });
 
  
  }
 
  private async openAdd(){
   
    const modalAdds = await this.modalAdd.create({
      component: NoteComponent
    })
    modalAdds.present()
  }
  
  private getDates(data:any):any{
    data=data.substring(0,10)
    return new Date(data)  
  }

   private async sync(){
    this.syncing=true;
    this.timingSync=  timer(4000).subscribe(()=>{ this.syncing=false  })  
  }


  private async openNote(note:modelNotes, positionEl:number){
    const openNotes = await this.modalAdd.create({
      component: ShownoteComponent,
      mode: "ios",
      componentProps:  {data: note, posEl:positionEl}
    })
    openNotes.present()
  }

  private async detailNote(note:modelNotes){
 
    const details =await this.detail.create({
      header: "Creación",
      subHeader: "Fecha de creación",
      message: this.getDates(`${note.date}`),
      buttons:[
        {text:"Entendido",role: "cancel"}
      ]
    })
    details.present()
  }

  private async aboutNotWrite(){
    const about =await this.detail.create({
      header: "Info de notas",
      subHeader: "Edición de notas",
      message: "Las notas en Favoritos y en papelera no pueden ser editadas.",
      buttons:[
        {text:"OK",role: "cancel"}
      ]
    })
    about.present()
  }
 private async openSheetMore(note:modelNotes,pos:number){
    
    const actions = await this.action.create({
      header: "Opciones",
      mode:"ios",
      buttons:  [
        
        {text: "",icon:'heart-outline', handler: ()=>this.setFavorite(note,pos)},
        {text: "Detalles", handler: ()=>this.detailNote(note)},
        {text: "Acerca de", handler: ()=>this.aboutNotWrite()},
        {text: "Cancel", role:"cancel"}

      ]

    })
    actions.present()

  } 
  private acceptRemove(note,pos:number){
    this.feature.createToast("Delete", "Enviada a papelera", "success");
    this.serviceCompl.addNewComplete(note); 
    this.service.deleteItem(pos)
  }
  private async deleteItem(note,pos:number){
    const removeItem = await this.detail.create({
      header: "Mover a papelera",
      message: "Realmente quieres remover este elemento?",
      buttons: [
        {text: "Remover", handler: ()=>this.acceptRemove(note,pos)},
        {text: "Cancelar", role:"cancel"}
      ]
    })
    removeItem.present();
  }

   
  private setFavorite(note,pos:number){
    this.feature.createToast("Favorite", " " +" Agregada a favoritos", "success");
    this.favorite.addNew(note); 
    this.service.deleteItem(pos)
  }
 



  private moreItem(e:any){

    this.timingMore = timer(500).subscribe(()=>{
      e.target.complete()
      this.endValue+=10
    })

  }
}
