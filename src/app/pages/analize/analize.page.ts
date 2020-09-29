import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { timer } from 'rxjs';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { AlertController } from '@ionic/angular';
import { ServiceFavorite } from 'src/app/services/service.favorite';
import { ServiceNotes } from 'src/app/services/service.notes';

@Component({
  selector: 'app-analize',
  templateUrl: './analize.page.html',
  styleUrls: ['./analize.page.scss'],
  providers:[
    ServiceLock,
    ServiceCompleted,
    ServiceNotes,
    ServiceFavorite
  ]
})
export class AnalizePage implements OnInit {
  public cleanImg = {
    success: '../../../assets/img-clean/speed.start.svg',
    title: "Analizando",
    activatedButton: true, 
    spinner: true,
    note:0,
    trash:0,
    favorites:0
  }
 
  constructor(
    private alert:AlertController,
    private confirmDel:AlertController,
    private reboot:AlertController,
    private locks:ServiceLock, 
    private notesServ:ServiceNotes,
    private favs:ServiceFavorite,
    private rem:ServiceCompleted) { }

  ngOnInit() {

    timer(2000).subscribe(()=>{

      this.cleanImg.spinner = false;
      this.cleanImg.title = "Analizado"
      this.cleanImg.activatedButton = false
      this.cleanImg.trash=this.rem.getAll().length;
      this.cleanImg.favorites= this.favs.favorite.length
      this.cleanImg.note= this.notesServ.notes.length
    })

  }

  cleaning(){

    this.cleanImg.title = "Limpiando";
    this.cleanImg.success = "../../../assets/img-clean/cleanin.svg";
    this.cleanImg.activatedButton = true
    this.cleanImg.spinner = true;

    timer(2500).subscribe(()=>{
      this.cleanImg.spinner = false;
      this.cleanImg.title = "Terminado"
      this.cleanImg.success= "../../../assets/img-clean/complete.svg"
      this.cleanImg.activatedButton = true
      this.cleanImg.trash =  0
      this.cleanImg.note =  0
      this.cleanImg.favorites =  0

       this.notesServ.notes = [];
       this.favs.favorite = []
       this.rem.completed=[]
       localStorage.removeItem("notes");
       localStorage.removeItem("favorite");
       localStorage.removeItem("completed");

       this.rebootApp()
        
    })

  }

   
  private async rebootApp(){
    const reboots = await this.reboot.create({
      header: "Reminder",
      backdropDismiss:false,
      subHeader: "Cierre y abra la app",
      message: "Debes cerrar la app para completar cambios."
    })
    reboots.present();
  }

  async failedPin(){
    const alertErr = await this.alert.create({
      header: "Pin",
      subHeader:  "Incorrecto",
      message: "Introduzca de nuevo el pin",
      buttons: [
        {text:"Intentar", handler: ()=>{ this.alertPass()}},
        {text: "Cancelar", role: "cancel"}
        
      ]
    })
    alertErr.present()
  }
  async alertPass(){
    
    const alerts = await this.alert.create({
      header: "PIN",
      message: "Introduzca su pin para confirmar",
      inputs: [
        {type: "password", name: "pass"}
      ],
      buttons: [
        {text: "Confirmar",  handler: (e)=>{
        
          if (this.locks.getPassword()[0].pass == parseInt(e.pass)){
            this.confirmDelete()
            
          }
          else{
            this.failedPin()
          }
          
         }},
        {text: "Cancelar", role: "cancel"}
      ]
    })

    alerts.present()

  }
  clean(){

    
      if (this.locks.existPassword()===true){
        this.alertPass()
      }
      else{
    
      timer(300).subscribe(()=>{
        this.confirmDelete()
      }) 

    }
    

  }
  
  private async confirmDelete(){
    const del = await this.confirmDel.create({
      header: "Delete",
      message: "Realmente quieres vacear las notas ?",
      buttons: [
        {text: "Seguro", handler:()=>this.cleaning()},
        {text: "Cancelar", role:"cancel"}
      ]
    })
    del.present()
  }
}
