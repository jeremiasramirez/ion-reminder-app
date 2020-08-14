import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { ToastController } from '@ionic/angular';
import { timer } from 'rxjs';



@Component({
  selector: 'app-lock',
  templateUrl: './lock.page.html',
  styleUrls: ['./lock.page.scss'],
  providers: [
    ServiceLock
  ]
})
export class LockPage implements OnInit {
  public formGroups :FormGroup
  public validators = Validators
  public existLock : boolean;
  

  hideForm = null
  showPin:boolean;
  constructor(
    private lock:ServiceLock,
    private toast:ToastController
    ) { 
    this.initValidation()
  }

   initValidation(){
    let validationArray = [
      this.validators.required,
      this.validators.maxLength(4),
      this.validators.minLength(4)
    ];

    let validationArrayEmail = [
      this.validators.email,
      this.validators.required,
      this.validators.maxLength(30),
      this.validators.minLength(8)
    ]


    this.formGroups= new FormGroup({
      
      email: new FormControl(null, validationArrayEmail),
      pin: new FormControl(null,  validationArray),
      pinConfirm: new FormControl(null, validationArray)

    })


  }
  ngOnInit() {
    this.existLock = this.lock.existPassword()
  }


  async changeToast(message:string){
   
    const toasts = await this.toast.create({

      message: message, 
      color:"tertiary",
      position: "top",
      duration: 5000,
      buttons: [{text:'OK',  handler: ()=>toasts.dismiss()}]

    })

    toasts.present()

  }

  addPin(){
    console.log(this.formGroups.controls)
    if (this.formGroups.controls.email.valid && this.formGroups.controls.pin.valid && this.formGroups.controls.pinConfirm.valid){
      
      if(this.formGroups.value.pin === this.formGroups.value.pinConfirm){

          this.changeToast("Perfecto")
      }
      else{
        this.changeToast("El pin debe ser el mismo.")
      }

    }
    else{
      this.changeToast("Pin o Email Invalido.")
    }
    
  }

  showAddPin(){
    if (this.showPin === true){
      this.hideForm="hideFormPin";
      timer(400).subscribe(()=>this.showPin = false);
    }
    else{ this.showPin = true; this.hideForm="";} 
  }
//this.showPin = true;


}










