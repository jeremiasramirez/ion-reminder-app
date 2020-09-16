import { Component  } from '@angular/core'; 
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { NoteComponent } from '../../components/note/note.component'; 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { FeatureService } from 'src/app/services/service.feature';
 
import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { timer } from 'rxjs';
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
  private searchData : any = ""
  private searchShow:boolean=true;
  private show:boolean;
  constructor(
    private favorite:ServiceFavorite,
    private status:StatusBar,
    private service:ServiceNotes,private serviceCompl:ServiceCompleted,
    private feature:FeatureService, private modalAdd:ModalController,
    private action:ActionSheetController,
    private categorieModal:ModalController,
    private detail:AlertController
    ) { 
    this.allNotes=  this.service.notes;
    this.status.backgroundColorByHexString('#5260ff');
  
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
  ngOnInit(){
    timer(1000).subscribe(()=>this.show=true)
  }
 
  async openAdd(){
   
    const modalAdds = await this.modalAdd.create({
      component: NoteComponent
    })
    modalAdds.present()
  }
  
  private getDates(data:any):any{
    data=data.substring(0,10)
    return new Date(data)  
  }


  async openNote(note:modelNotes, positionEl:number){
    const openNotes = await this.modalAdd.create({
      component: ShownoteComponent,
      mode: "ios",
      componentProps:  {data: note, posEl:positionEl}
    })
    openNotes.present()
  }

  private async detailNote(note:any){
    console.log(note)
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

  async openSheetMore(note,pos){
    
    const actions = await this.action.create({
      header: "Opciones",
      mode:"ios",
      buttons:  [
        
        {text: "Agregar a favoritos", handler: ()=>this.setFavorite(note,pos)},
        {text: "Detalles", handler: ()=>this.detailNote(note)},
        {text: "Cancel", role:"cancel"}

      ]

    })
    actions.present()

  } 

  public deleteItem(note,pos:number){
    this.feature.createToast("Delete", "Borrada correctamente", "danger");
    this.serviceCompl.addNewComplete(note); 
    this.service.deleteItem(pos)
  }

   
  public setFavorite(note,pos:number){
    this.feature.createToast("Favorite", " " +" Agregada a favoritos", "success");
    this.favorite.addNew(note); 
    this.service.deleteItem(pos)
  }
 

  async newCategorie(){
    const cat = await this.categorieModal.create({
      component: CategoriesComponent
    })
    cat.present()
  }


  moreItem(e:any){

    timer(500).subscribe(()=>{
      e.target.complete()
      this.endValue+=10
    })

  }
}
