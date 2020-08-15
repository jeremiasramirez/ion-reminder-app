import { Injectable } from "@angular/core"
import { Router } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular'
import { async } from 'rxjs/internal/scheduler/async'
import { timer } from 'rxjs'


@Injectable()

export class ServiceLock{
    
    constructor(public router:Router,
        private alert:AlertController,
        private toast:ToastController){ }

    setRouter(where:string){
        this.router.navigate([where])
    }

    setPassword(password:{pass:string;email:string|number}){
        sessionStorage.setItem("lock", JSON.stringify([ password ]))
    }
    existPassword(){
        
        if (sessionStorage.getItem("lock"))
            return true 
        else false
        
    }


   async removePassword(){
        if (this.existPassword()){
            const quit = await this.alert.create({
                header: "Pin",
                subHeader: "Deseas eliminar el pin",
                inputs: [
                    {type:"password", name: "pin", placeholder: "Pin actual"}
                ],
                buttons: [
                    {text:"Confirmar", handler: (name)=> this.quitPass(name.pin) },
                    {text: "Cancelar",role:"cancel"}
                ]
            })
            quit.present()
        }
    }

    private async toastLock(msj:string, try_:boolean=false){
       
        if (!try_){
            const toasts = await this.toast.create({
                message: msj,
                duration: 2000,
                color: "tertiary",
                position: "top",
                buttons: [
                    {text: "Ok", role:"cancel"}
                ]
            })
            toasts.present()
        }
        else{
            const toasts = await this.toast.create({
                message: msj,
                duration: 4000,
                position: "top", 
                color: "danger",
                buttons: [
                    {text: "Reintentar", handler: ()=>{this.removePassword()}}
                ]
            })
            toasts.present()
        }

    }
    public   quitPass(pin:any){
       
        if (this.existPassword() &&  pin=== this.getPassword()[0].pass){
            this.toastLock("Pin removido")
            this.removePin()
        }
        else{
            this.toastLock("Pin incorrecto",true)
            
        } 
 
   }
   removePin(){
        sessionStorage.removeItem("lock")
    
   }
    getPassword(){
       if (sessionStorage.getItem("lock"))
        return JSON.parse(sessionStorage.getItem("lock"))
    }

    verifiedPass(pass:any){
        if (pass === this.getPassword()[0].pass){
            return true
        }
        else{
            return false
        }
    }
}