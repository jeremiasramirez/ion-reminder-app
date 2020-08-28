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
        localStorage.setItem("lock", JSON.stringify([ password ]))
    }
    existPassword(){
        
        if (localStorage.getItem("lock"))
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

    public async toastLock(msj:string, try_:boolean=false, color:string="tertiary",mode:any="md"){
       
        if (!try_){
            const toasts = await this.toast.create({
                message: msj,
                duration: 2000,
                color: color,
                mode: mode,
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
        localStorage.removeItem("lock")
    
   }
    getPassword(){
       if (localStorage.getItem("lock"))
        return JSON.parse(localStorage.getItem("lock"))
    }

    verifiedPass(pass:any){
        if (pass === this.getPassword()[0].pass){
            return true
        }
        else{
            return false
        }
    }


    verifiedEmail(email:string){
        if (email === this.getPassword()[0].email){
            return true
        }
        else{
            return false
        }
    }
}