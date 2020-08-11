import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { timer } from 'rxjs';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-analize',
  templateUrl: './analize.page.html',
  styleUrls: ['./analize.page.scss'],
  providers:[
    ServiceLock,
    ServiceCompleted
  ]
})
export class AnalizePage implements OnInit {
  public cleanImg = {
    success: '../../../assets/img-clean/speed.start.svg',
    title: "Analizando",
    activatedButton: true, 
    spinner: true,
    note:0,
    trash:0
  }
 
  constructor(public alert:AlertController,
    public locks:ServiceLock, public rem:ServiceCompleted) { }

  ngOnInit() {

    timer(2000).subscribe(()=>{

      this.cleanImg.spinner = false;
      this.cleanImg.title = "Analizado"
      this.cleanImg.activatedButton = false
      this.cleanImg.trash=this.rem.getAll().length

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
    })

  }

  clean_(){

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
        
          console.log(e)
          if (this.locks.getPassword()[0].pass == parseInt(e.pass)){
            console.log(this.locks.getPassword())
            
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
        this.cleaning()
      }) 

    }
    

  }



}
