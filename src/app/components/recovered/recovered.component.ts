import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { timer } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.scss'],
})
export class RecoveredComponent   {

  private checked :boolean;
  private email:string="";
  private finded :boolean;
  private showSpinner :boolean;
  private newPin:any;
  private newPinConfirm:any;

  constructor(
    private modal:ModalController,
    private emailService:ServiceLock ) { }
  
  searchEmail(){
   

    if (this.emailService.existPassword() && this.email !== ""){
         this.rotateSpinner()
      if(this.emailService.verifiedEmail(this.email) ){

        timer(1000).subscribe(()=>this.emailService.toastLock("Email encontrado",false,"tertiary","ios"))
        timer(2000).subscribe(()=>{
          this.finded=true
          timer(2000).subscribe(()=>this.emailService.toastLock("Ingresa un nuevo PIN",false, "success","ios"))
        })

      }
      else{
        timer(1000).subscribe(()=>this.emailService.toastLock("Email no encontrado",false,"danger","ios"))
      }
    }
    else{
      timer(1000).subscribe(()=>this.emailService.toastLock("Introduzca un email correcto",false,"light", "ios"))
    }

  }

  private async closeModal(){
    timer(300).subscribe(()=>this.modal.dismiss())
  }

  private rotateSpinner(){
    this.showSpinner=true;
    timer(1000).subscribe(()=>this.showSpinner=false)
  }

  private changePin(){

    this.verifiedPin()

  }

  private msjToast(msj:string, band:boolean=false,color="tertiary",mode="ios"){
    timer(1000).subscribe(()=>{
      this.emailService.toastLock(msj,band,color, mode)
    })
     this.rotateSpinner()
  }

  private verifiedPin(){
    let newPin = `${this.newPin}`, newPinConfirm = `${this.newPinConfirm}`;
   
    if (newPin.length == 4 && newPinConfirm.length == 4){
       if (newPin === newPinConfirm){

        this.msjToast("PIN actualizado", false, "success",  "ios")
        this.emailService.setPassword({pass:newPin,email:this.email})
        timer(1200).subscribe(()=>this.closeModal())
        
       }
       else{
        this.msjToast("El PIN  debe ser el mismo  ", false, "danger",  "ios")
       }

    }
    else{
      
      this.msjToast("Introduzca un PIN válido ", false, "danger",  "ios")
    }
  }


}
 