import { Injectable } from "@angular/core"
import { ActionSheetController } from '@ionic/angular'

@Injectable()

export class DarkMode {
    public checkedDark:boolean
    constructor(private action:ActionSheetController){
       this.existDark()
       this.checkedDark = this.existDark()
       
    }

    setDark(){
        localStorage.setItem("dark","true")
    }

    quitDark(){ 
        localStorage.removeItem("dark") 
    }
    existDark(){
        
        if (localStorage.getItem("dark")){  document.body.classList.add("dark"); return true }
        else { return false }

    }

    darks(){
        document.body.classList.add("dark")
        if (this.checkedDark == false) this.checkedDark=true; else this.checkedDark = false
        if (this.checkedDark) this.setDark()
      }

      lightOrDark(){
        
          document.body.classList.toggle("dark")
          if (this.checkedDark == false) this.checkedDark=true; else this.checkedDark = false
          if (this.checkedDark) this.setDark()
          else this.quitDark()
        
      }

    light(){
        document.body.classList.remove("dark")
        if (this.checkedDark == false) this.checkedDark=true; else this.checkedDark = false
        if (!this.checkedDark) this.quitDark() 
    }

    async changeTheme(){
        const themes = await this.action.create({
          header: "Theme",
          buttons: [ 
            {text: "Modo dark", icon: "contrast", handler: ()=>{this.darks()}},
            {text: "Modo light", icon: "sunny", handler: ()=>{this.light()}},
            {text:"Cancel",icon: "close", role: "cancel"}
          ]
        })
    
        themes.present()
      }
} 